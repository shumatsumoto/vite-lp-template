# Vite LP Template

Viteを使用したランディングページのテンプレートです。

## セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# プロダクションビルド
npm run build

# ビルドのプレビュー
npm run preview
```

## ディレクトリ構成

```
.
├── index.html              # エントリーポイント
├── public/                 # 静的ファイル（favicon等）
│   ├── favicon.ico
│   └── apple-touch-icon.png
├── src/
│   ├── main.js            # JavaScriptエントリーポイント
│   └── sass/              # SCSSファイル
│       ├── style.scss     # メインスタイル
│       ├── base/          # ベーススタイル
│       │   ├── _base.scss
│       │   └── _reset.scss
│       └── global/        # グローバル設定
│           ├── _index.scss
│           ├── _font.scss
│           ├── _colors.scss
│           └── _responsive.scss
├── package.json
└── vite.config.js         # Vite設定
```

## 主な機能

- ⚡️ Viteによる高速な開発環境
- 🎨 SCSS/Sassサポート
- 📱 レスポンシブデザイン対応
- 🔧 メディアクエリmixin
- 🎯 モダンブラウザ対応

## 開発時の注意点

- 画像やフォントなどの静的ファイルは `public/` ディレクトリに配置してください
- SCSSファイルは `src/sass/` 以下に配置してください
- JavaScriptは `src/main.js` から読み込まれます
