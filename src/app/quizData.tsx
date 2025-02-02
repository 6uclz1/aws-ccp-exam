export const questions = [
    {
      id: 1,
      question: "AWSのオンデマンドインスタンスの課金方法として正しいものは？",
      options: [
        { id: "a", text: "1時間単位で課金される" },
        { id: "b", text: "秒単位で課金される（最低60秒）" },
        { id: "c", text: "月額固定で課金される" },
        { id: "d", text: "年間契約のみで利用可能" }
      ],
      correctAnswer: "b",
      explanation: "EC2のオンデマンドインスタンスは、秒単位での課金（最低60秒）となります。"
    },
    {
      id: 2,
      question: "Amazon S3のストレージクラスで、アクセス頻度の低いデータに適しているものは？",
      options: [
        { id: "a", text: "S3 Standard" },
        { id: "b", text: "S3 Intelligent-Tiering" },
        { id: "c", text: "S3 Standard-IA" },
        { id: "d", text: "S3 One Zone-IA" }
      ],
      correctAnswer: "c",
      explanation: "S3 Standard-IAは、アクセス頻度は低いが、必要な時には即座にアクセスが必要なデータに最適です。"
    },
    {
      id: 3,
      question: "AWSのグローバルインフラストラクチャに関して正しい説明は？",
      options: [
        { id: "a", text: "アベイラビリティーゾーンは、1つのリージョン内に1つのみ存在する" },
        { id: "b", text: "エッジロケーションは、CloudFrontのみで使用される" },
        { id: "c", text: "各リージョンは完全に独立して動作する" },
        { id: "d", text: "リージョン間のデータ転送は常に無料" }
      ],
      correctAnswer: "c",
      explanation: "各AWSリージョンは他のリージョンから完全に独立して動作し、リソースは自動的に他のリージョンにレプリケートされることはありません。"
    },
    {
      id: 4,
      question: "AWS Identity and Access Management (IAM)の特徴として正しくないものは？",
      options: [
        { id: "a", text: "IAMユーザーの作成と管理は有料である" },
        { id: "b", text: "多要素認証（MFA）を設定できる" },
        { id: "c", text: "きめ細かなアクセス権限の設定が可能" },
        { id: "d", text: "パスワードポリシーを設定できる" }
      ],
      correctAnswer: "a",
      explanation: "IAMの使用自体は無料です。ユーザーの作成、グループの管理、ポリシーの設定などに追加料金は発生しません。"
    },
    {
      id: 5,
      question: "Amazon EC2インスタンスタイプの命名規則で、t3.microの「t3」が示すものは？",
      options: [
        { id: "a", text: "メモリ容量" },
        { id: "b", text: "インスタンスファミリー" },
        { id: "c", text: "ネットワーク性能" },
        { id: "d", text: "ストレージタイプ" }
      ],
      correctAnswer: "b",
      explanation: "インスタンスタイプの最初の部分（t3）はインスタンスファミリーを示し、この場合は汎用バースト可能なインスタンスファミリーを表します。"
    },
    {
      id: 6,
      question: "AWS Well-Architected Frameworkの5つの柱に含まれないものは？",
      options: [
        { id: "a", text: "運用上の優秀性" },
        { id: "b", text: "セキュリティ" },
        { id: "c", text: "データベース管理" },
        { id: "d", text: "コスト最適化" }
      ],
      correctAnswer: "c",
      explanation: "AWS Well-Architected Frameworkの5つの柱は、運用上の優秀性、セキュリティ、信頼性、パフォーマンス効率、コスト最適化です。"
    },
    {
      id: 7,
      question: "Amazon RDSで利用できないデータベースエンジンは？",
      options: [
        { id: "a", text: "MongoDB" },
        { id: "b", text: "MySQL" },
        { id: "c", text: "PostgreSQL" },
        { id: "d", text: "MariaDB" }
      ],
      correctAnswer: "a",
      explanation: "MongoDBはAmazon RDSではサポートされていません。MongoDBを使用する場合は、Amazon DocumentDBまたはself-managed EC2インスタンスを使用する必要があります。"
    },
    {
      id: 8,
      question: "AWS Organizationsの主な機能でないものは？",
      options: [
        { id: "a", text: "一括請求機能" },
        { id: "b", text: "アカウントのグループ化" },
        { id: "c", text: "サーバーレスアプリケーションの実行" },
        { id: "d", text: "ポリシーベースの管理" }
      ],
      correctAnswer: "c",
      explanation: "サーバーレスアプリケーションの実行はAWS Lambdaの機能です。AWS Organizationsは、複数のAWSアカウントを一元管理するためのサービスです。"
    },
    {
      id: 9,
      question: "Amazon CloudWatchの主な機能は？",
      options: [
        { id: "a", text: "コードのビルドとデプロイ" },
        { id: "b", text: "モニタリングとオブザーバビリティ" },
        { id: "c", text: "データベースの管理" },
        { id: "d", text: "コンテナのオーケストレーション" }
      ],
      correctAnswer: "b",
      explanation: "Amazon CloudWatchは、AWSリソースとアプリケーションのモニタリング、ログ管理、アラート設定などを行うためのサービスです。"
    },
    {
      id: 10,
      question: "AWS Lambdaの特徴として正しくないものは？",
      options: [
        { id: "a", text: "サーバーレスアーキテクチャ" },
        { id: "b", text: "イベント駆動型の実行" },
        { id: "c", text: "常時稼働が必要" },
        { id: "d", text: "自動スケーリング" }
      ],
      correctAnswer: "c",
      explanation: "AWS Lambdaはサーバーレスサービスで、イベントが発生した時のみ実行され、常時稼働は必要ありません。"
    },
    {
      id: 11,
      question: "Amazon VPCの主な目的は？",
      options: [
        { id: "a", text: "ウェブサイトのホスティング" },
        { id: "b", text: "isolated networkの作成" },
        { id: "c", text: "データベースのバックアップ" },
        { id: "d", text: "コンテンツの配信" }
      ],
      correctAnswer: "b",
      explanation: "Amazon VPCは、AWSクラウド内に論理的に分離されたネットワーク環境を作成するためのサービスです。"
    },
    {
      id: 12,
      question: "AWS Trusted Advisorが提供しないチェック項目は？",
      options: [
        { id: "a", text: "コスト最適化" },
        { id: "b", text: "パフォーマンス" },
        { id: "c", text: "ソースコード品質" },
        { id: "d", text: "セキュリティ" }
      ],
      correctAnswer: "c",
      explanation: "AWS Trusted Advisorは、コスト最適化、パフォーマンス、セキュリティ、フォールトトレランス、サービス制限のチェックを提供します。"
    },
    {
      id: 13,
      question: "AWSの責任共有モデルで、顧客の責任に含まれないものは？",
      options: [
        { id: "a", text: "アプリケーションのセキュリティ" },
        { id: "b", text: "データの暗号化" },
        { id: "c", text: "物理的なサーバーのセキュリティ" },
        { id: "d", text: "ネットワークファイアウォールの設定" }
      ],
      correctAnswer: "c",
      explanation: "物理的なインフラストラクチャのセキュリティはAWSの責任です。顧客は、アプリケーション層からデータまでのセキュリティを管理する責任があります。"
    },
    {
      id: 14,
      question: "Amazon Route 53の主な機能は？",
      options: [
        { id: "a", text: "コンテナ管理" },
        { id: "b", text: "DNSサービス" },
        { id: "c", text: "メール配信" },
        { id: "d", text: "ファイル共有" }
      ],
      correctAnswer: "b",
      explanation: "Amazon Route 53は、高可用性と拡張性を備えたドメインネームシステム（DNS）ウェブサービスです。"
    },
    {
      id: 15,
      question: "AWS CloudFormationの主な目的は？",
      options: [
        { id: "a", text: "インフラストラクチャのコード化" },
        { id: "b", text: "データベースの最適化" },
        { id: "c", text: "ネットワークのモニタリング" },
        { id: "d", text: "アプリケーションのデバッグ" }
      ],
      correctAnswer: "a",
      explanation: "AWS CloudFormationは、AWSリソースをコードとして定義し、自動的にデプロイするためのサービスです。"
    },
    {
      id: 16,
      question: "Amazon Elastic Block Store (EBS)の特徴として正しくないものは？",
      options: [
        { id: "a", text: "EC2インスタンスのブロックレベルストレージ" },
        { id: "b", text: "自動的にレプリケーション" },
        { id: "c", text: "グローバルにアクセス可能" },
        { id: "d", text: "スナップショットの作成が可能" }
      ],
      correctAnswer: "c",
      explanation: "EBSボリュームは、特定のアベイラビリティーゾーンに紐付けられており、グローバルにアクセスすることはできません。"
    },
    {
      id: 17,
      question: "AWS Shield Standardが提供する保護の対象は？",
      options: [
        { id: "a", text: "SQLインジェクション攻撃" },
        { id: "b", text: "一般的なDDoS攻撃" },
        { id: "c", text: "クロスサイトスクリプティング" },
        { id: "d", text: "バッファオーバーフロー" }
      ],
      correctAnswer: "b",
      explanation: "AWS Shield Standardは、すべてのAWSユーザーに無料で提供され、一般的なDDoS攻撃から保護します。"
    },
    {
      id: 18,
      question: "AWS Budgetsの主な機能は？",
      options: [
        { id: "a", text: "コスト予算の設定と管理" },
        { id: "b", text: "アプリケーションの監視" },
        { id: "c", text: "データベースの最適化" },
        { id: "d", text: "ネットワークトラフィックの制御" }
      ],
      correctAnswer: "a",
      explanation: "AWS Budgetsは、AWSのコストと使用量を追跡し、予算を設定して管理するためのツールです。"
    },
    {
      id: 19,
      question: "Amazon Aurora の特徴として正しくないものは？",
      options: [
        { id: "a", text: "MySQLおよびPostgreSQLと互換性がある" },
        { id: "b", text: "自動バックアップ機能" },
        { id: "c", text: "NoSQLデータベース" },
        { id: "d", text: "自動スケーリング" }
      ],
      correctAnswer: "c",
      explanation: "Amazon Auroraはリレーショナルデータベースであり、NoSQLデータベースではありません。MySQLおよびPostgreSQLと互換性があります。"
    },
    {
      id: 20,
      question: "AWS Direct Connectの主な目的は？",
      options: [
        { id: "a", text: "オンプレミスからAWSへの専用ネットワーク接続" },
        { id: "b", text: "コンテンツ配信の高速化" },
        { id: "c", text: "データベースの冗長化" },
        { id: "d", text: "サーバーレス関数の実行" }
      ],
      correctAnswer: "a",
      explanation: "AWS Direct Connectは、オンプレミス環境からAWSへの専用のネットワーク接続を提供するサービスです。"
    },
    {
      id: 21,
      question: "Amazon GuardDutyの主な機能は？",
      options: [
        { id: "a", text: "インテリジェントな脅威検出" },
        { id: "b", text: "データベースの自動バックアップ" },
        { id: "c", text: "コンテナのオーケストレーション" },
        { id: "d", text: "サーバーレスアプリケーションの実行" }
      ],
      correctAnswer: "a",
      explanation: "Amazon GuardDutyは、機械学習を使用してAWSアカウントとワークロードを保護する脅威検出サービスです。"
    },
    {
      id: 22,
      question: "AWS Snowballの主な用途は？",
      options: [
        { id: "a", text: "大容量データの物理的な転送" },
        { id: "b", text: "リアルタイムデータ分析" },
        { id: "c", text: "ウェブサイトのホスティング" },
        { id: "d", text: "サーバーレスコンピューティング" }
      ],
      correctAnswer: "a",
      explanation: "AWS Snowballは、大量のデータをAWSとの間で物理的に転送するためのサービスです。"
    },
    {
      id: 23,
      question: "AWS Cost Explorerの主な機能は？",
      options: [
        { id: "a", text: "コードのデプロイ自動化" },
        { id: "b", text: "コストと使用状況の可視化" },
        { id: "c", text: "データベースの管理" },
        { id: "d", text: "サーバーレス関数の実行" }
      ],
      correctAnswer: "b",
      explanation: "AWS Cost Explorerは、AWSのコストと使用状況を可視化し、分析するためのツールです。"
    },
    {
      id: 24,
      question: "Amazon Elastic Container Service (ECS)の主な目的は？",
      options: [
        { id: "a", text: "静的ウェブサイトのホスティング" },
        { id: "b", text: "コンテナ化されたアプリケーションの実行" },
        { id: "c", text: "データベースのバックアップ" },
        { id: "d", text: "DNSの管理" }
      ],
      correctAnswer: "b",
      explanation: "Amazon ECSは、Docker コンテナを簡単に実行、停止、管理できるコンテナオーケストレーションサービスです。"
    },
    {
      id: 25,
      question: "AWS IAMのルートユーザーについて正しい説明は？",
      options: [
        { id: "a", text: "日常的なタスクに使用すべき" },
        { id: "b", text: "MFAの設定は任意" },
        { id: "c", text: "完全な管理者権限を持つ" },
        { id: "d", text: "複数のルートユーザーを作成できる" }
      ],
      correctAnswer: "c",
      explanation: "ルートユーザーは完全な管理者権限を持ちますが、日常的な作業には使用せず、MFAを設定し、適切に保護する必要があります。"
    },
    {
      id: 26,
      question: "AWS Systems Managerの主な機能でないものは？",
      options: [
        { id: "a", text: "パッチ管理" },
        { id: "b", text: "コンテンツ配信" },
        { id: "c", text: "自動化" },
        { id: "d", text: "インベントリ管理" }
      ],
      correctAnswer: "b",
      explanation: "コンテンツ配信はAmazon CloudFrontの機能です。AWS Systems Managerは、インフラストラクチャの可視化と制御のためのサービスです。"
    },
    {
      id: 27,
      question: "Amazon ElastiCacheの主な用途は？",
      options: [
        { id: "a", text: "インメモリキャッシング" },
        { id: "b", text: "コンテナオーケストレーション" },
        { id: "c", text: "サーバーレス実行環境" },
        { id: "d", text: "ネットワーク分離" }
      ],
      correctAnswer: "a",
      explanation: "Amazon ElastiCacheは、クラウド内でインメモリキャッシングを実現し、アプリケーションのパフォーマンスを向上させるサービスです。"
    },
    {
      id: 28,
      question: "AWS CloudTrailの主な目的は？",
      options: [
        { id: "a", text: "リソースのプロビジョニング" },
        { id: "b", text: "APIアクティビティの記録" },
        { id: "c", text: "コンテナの管理" },
        { id: "d", text: "データベースの最適化" }
      ],
      correctAnswer: "b",
      explanation: "AWS CloudTrailは、AWSアカウントのガバナンス、コンプライアンス、運用監査、リスク監査を行うためのサービスで、APIアクティビティを記録します。"
    },
    {
      id: 29,
      question: "AWS Marketplace とは？",
      options: [
        { id: "a", text: "AWSリソースの価格計算ツール" },
        { id: "b", text: "サードパーティーソフトウェアのカタログ" },
        { id: "c", text: "プログラミング学習プラットフォーム" },
        { id: "d", text: "クラウドストレージサービス" }
      ],
      correctAnswer: "b",
      explanation: "AWS Marketplaceは、AWSで実行できるサードパーティーのソフトウェアやサービスを見つけて購入できるデジタルカタログです。"
    },
    {
      id: 30,
      question: "AWS Snow Familyに含まれないものは？",
      options: [
        { id: "a", text: "AWS Snowcone" },
        { id: "b", text: "AWS Snowball" },
        { id: "c", text: "AWS Snowmobile" },
        { id: "d", text: "AWS Snowflake" }
      ],
      correctAnswer: "d",
      explanation: "AWS Snow FamilyにはSnowcone、Snowball、Snowmobileが含まれます。Snowflakeは存在しないサービスです。"
    },
    {
      id: 31,
      question: "Amazon Elastic File System (EFS)の特徴として正しくないものは？",
      options: [
        { id: "a", text: "フルマネージドサービス" },
        { id: "b", text: "複数のEC2インスタンスからアクセス可能" },
        { id: "c", text: "Windows専用のファイルシステム" },
        { id: "d", text: "自動でスケーリング" }
      ],
      correctAnswer: "c",
      explanation: "Amazon EFSは、Linux向けのフルマネージドファイルシステムです。Windows専用ではありません。"
    },
    {
      id: 32,
      question: "AWS Personal Health Dashboardの主な機能は？",
      options: [
        { id: "a", text: "AWSサービスの状態と影響の確認" },
        { id: "b", text: "個人の健康データの管理" },
        { id: "c", text: "システムパフォーマンスの最適化" },
        { id: "d", text: "コスト管理" }
      ],
      correctAnswer: "a",
      explanation: "AWS Personal Health Dashboardは、AWSサービスの状態とその影響を確認できる、パーソナライズされたビューを提供します。"
    },
    {
      id: 33,
      question: "AWS Organizations で作成できる組織単位（OU）の最大階層数は？",
      options: [
        { id: "a", text: "3層" },
        { id: "b", text: "4層" },
        { id: "c", text: "5層" },
        { id: "d", text: "6層" }
      ],
      correctAnswer: "c",
      explanation: "AWS Organizationsでは、ルートの下に最大5層の組織単位（OU）を作成できます。"
    },
    {
      id: 34,
      question: "AWS WAFの主な目的は？",
      options: [
        { id: "a", text: "ウェブアプリケーションの保護" },
        { id: "b", text: "データベースのバックアップ" },
        { id: "c", text: "サーバーレスコンピューティング" },
        { id: "d", text: "コンテナオーケストレーション" }
      ],
      correctAnswer: "a",
      explanation: "AWS WAF（Web Application Firewall）は、ウェブアプリケーションを一般的なウェブの脆弱性から保護するためのサービスです。"
    },
    {
      id: 35,
      question: "AWS Transit Gatewayの主な機能は？",
      options: [
        { id: "a", text: "VPCとオンプレミスネットワークの一元管理" },
        { id: "b", text: "コンテナの管理" },
        { id: "c", text: "サーバーレス関数の実行" },
        { id: "d", text: "データベースの最適化" }
      ],
      correctAnswer: "a",
      explanation: "AWS Transit Gatewayは、VPCとオンプレミスネットワークを一元的に接続・管理するためのサービスです。"
    },
    {
      id: 36,
      question: "AWS Certificate Manager (ACM)の主な機能は？",
      options: [
        { id: "a", text: "SSLとTLS証明書の管理" },
        { id: "b", text: "コンテナイメージの管理" },
        { id: "c", text: "データベースの認証" },
        { id: "d", text: "APIキーの管理" }
      ],
      correctAnswer: "a",
      explanation: "AWS Certificate Managerは、SSL/TLS証明書のプロビジョニング、管理、デプロイを簡素化するサービスです。"
    },
    {
      id: 37,
      question: "AWS Config の主な目的は？",
      options: [
        { id: "a", text: "リソース構成の評価と監査" },
        { id: "b", text: "アプリケーションのデプロイ" },
        { id: "c", text: "データベースの管理" },
        { id: "d", text: "コンテナのオーケストレーション" }
      ],
      correctAnswer: "a",
      explanation: "AWS Configは、AWSリソースの構成を評価、監査、および評価するためのサービスです。"
    },
    {
      id: 38,
      question: "Amazon Cognito の主な機能は？",
      options: [
        { id: "a", text: "ユーザー認証と認可" },
        { id: "b", text: "データベースの最適化" },
        { id: "c", text: "コンテナの管理" },
        { id: "d", text: "ネットワークの監視" }
      ],
      correctAnswer: "a",
      explanation: "Amazon Cognitoは、ウェブおよびモバイルアプリケーションにユーザー認証、認可、およびユーザー管理機能を追加するためのサービスです。"
    },
    {
      id: 39,
      question: "AWS Support プランに含まれないものは？",
      options: [
        { id: "a", text: "Basic" },
        { id: "b", text: "Developer" },
        { id: "c", text: "Premium" },
        { id: "d", text: "Enterprise" }
      ],
      correctAnswer: "c",
      explanation: "AWS Supportプランには、Basic、Developer、Business、Enterpriseがあります。Premiumプランは存在しません。"
    },
    {
      id: 40,
      question: "AWS Control Tower の主な目的は？",
      options: [
        { id: "a", text: "マルチアカウント環境のセットアップと管理" },
        { id: "b", text: "コンテナの管理" },
        { id: "c", text: "データベースの最適化" },
        { id: "d", text: "サーバーレス関数の実行" }
      ],
      correctAnswer: "a",
      explanation: "AWS Control Towerは、セキュアでコンプライアンスに準拠したマルチアカウントAWS環境のセットアップと管理を自動化するサービスです。"
    }
  ]