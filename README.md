# 個人ウェブサイト

kyohei.dev風のシンプルな個人サイトです。

## 構成

```
myself/
├── index.html       # メインページ
├── styles.css       # スタイルシート
├── images/          # 画像ファイル
│   └── profile.jpg  # プロフィール写真
└── README.md        # このファイル
```

## セットアップ

1. `images/profile.jpg` にプロフィール写真を配置
2. `index.html` の内容を自分の情報に書き換え
3. ブラウザで `index.html` を開く

## カスタマイズ方法

### 基本情報の変更

`index.html` の以下の部分を編集：

- `<title>` タグ: ページタイトル
- `<h1>` タグ: 名前
- `.subtitle`: 職業・肩書き
- `#about`: 自己紹介
- `.social-links`: SNSリンク

### セクションの編集

#### Career（経歴）
`.career-item` をコピーして追加・削除

#### Works（実績）
`.work-category` と `.work-item` を編集

#### Contact（連絡先）
メールアドレスを変更

### デザインのカスタマイズ

`styles.css` で以下を変更可能：

- 色: `color` プロパティ
- フォント: `font-family` プロパティ
- サイズ: `.container` の `max-width`
- 間隔: `margin`, `padding` プロパティ

## デプロイ

### GitHub Pages

1. GitHubリポジトリを作成
2. ファイルをpush
3. Settings > Pages で公開

### Netlify / Vercel

1. GitHubリポジトリと連携
2. 自動デプロイ

### 独自ドメイン

各サービスのドキュメントに従ってカスタムドメインを設定

## ライセンス

MIT
