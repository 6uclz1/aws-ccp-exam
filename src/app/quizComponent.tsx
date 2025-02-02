"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { shuffle } from 'lodash';
import { questions } from './quizData';

const QuizComponent = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);

  // 初回レンダリング時に問題をシャッフル
  useEffect(() => {
    setShuffledQuestions(shuffle([...questions]));
  }, []);

  // 各問題表示時に選択肢をシャッフル
  useEffect(() => {
    if (shuffledQuestions.length > 0) {
      setShuffledOptions(shuffle([...shuffledQuestions[currentQuestionIndex].options]));
    }
  }, [currentQuestionIndex, shuffledQuestions]);

  const handleSubmit = () => {
    const isCorrect = selectedAnswer === shuffledQuestions[currentQuestionIndex].correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
    }
    setQuestionsAnswered(questionsAnswered + 1);
    setIsAnswered(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer("");
      setIsAnswered(false);
    }
  };

  if (shuffledQuestions.length === 0) {
    return <div>Loading...</div>;
  }

  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl">
          問題 {currentQuestionIndex + 1} / {shuffledQuestions.length}
        </CardTitle>
        <div className="text-sm text-gray-600">
          正答率: {questionsAnswered > 0 ? Math.round((score / questionsAnswered) * 100) : 0}% 
          ({score}/{questionsAnswered})
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="text-lg font-medium">
            {currentQuestion.question}
          </div>

          <RadioGroup
            value={selectedAnswer}
            onValueChange={setSelectedAnswer}
            className="space-y-4"
          >
            {shuffledOptions.map((option) => (
              <div key={option.id} className="flex items-center space-x-2">
                <RadioGroupItem
                  value={option.id}
                  id={option.id}
                  disabled={isAnswered}
                />
                <Label
                  htmlFor={option.id}
                  className={`${
                    isAnswered && option.id === currentQuestion.correctAnswer
                      ? "text-green-600 font-medium"
                      : ""
                  }`}
                >
                  {option.text}
                </Label>
              </div>
            ))}
          </RadioGroup>

          {isAnswered && (
            <Alert className={isCorrect ? "bg-green-50" : "bg-red-50"}>
              <AlertDescription>
                {isCorrect ? "正解です！" : "不正解です。"}
                <br />
                {currentQuestion.explanation}
              </AlertDescription>
            </Alert>
          )}

          <div className="flex justify-between">
            <Button
              onClick={handleSubmit}
              disabled={!selectedAnswer || isAnswered}
            >
              回答する
            </Button>
            {currentQuestionIndex === shuffledQuestions.length - 1 ? (
              <Button
                onClick={() => window.location.reload()}
                disabled={!isAnswered}
              >
                最初からやり直す
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                disabled={!isAnswered}
              >
                次の問題へ
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuizComponent;