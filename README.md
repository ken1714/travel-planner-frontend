## Travel Planner Frontend

このフロントエンドは React + Vite で構築しており、Apollo Client を通じて任意の GraphQL バックエンドへ問い合わせできるように設定済みです。

### セットアップ

1. 依存関係をインストール
   ```bash
   npm install
   ```
2. `.env.example` をコピーし、接続したい GraphQL エンドポイントを設定
   ```bash
   cp .env.example .env
   # 例) VITE_GRAPHQL_ENDPOINT=http://localhost:4000/graphql
   ```
3. 開発サーバーを起動
   ```bash
   npm run dev
   ```

### GraphQL リクエスト確認

`src/App.tsx` では次のように Apollo Client の `useQuery` を利用して `HealthCheck` クエリを送信しています。

```tsx
const SAMPLE_QUERY = gql`
  query HealthCheck {
    health
  }
`
```

接続先のバックエンドに存在するクエリへ適宜書き換えてください。画面上の「Run again」ボタンで `refetch` が走り、レスポンス / エラーが見えるようになっています。
