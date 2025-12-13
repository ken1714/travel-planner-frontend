import { gql } from '@apollo/client'
import { useQuery } from '@apollo/client/react'
import './App.css'

const SAMPLE_QUERY = gql`
  query Users {
    users {
      id
    }
  }
`

function App() {
  const { data, error, loading, refetch } = useQuery(SAMPLE_QUERY, {
    fetchPolicy: 'network-only',
  })

  return (
    <main className="card">
      <h1>GraphQL connection check</h1>
      <p>
        The request below runs <code>HealthCheck</code> against the GraphQL
        endpoint configured in <code>VITE_GRAPHQL_ENDPOINT</code>. Replace the
        query in <code>src/App.tsx</code> with one that exists on your backend.
      </p>

      <section>
        <p>Status: {loading ? 'Loading…' : 'Completed'}</p>
        {error ? (
          <p className="error">Error: {error.message}</p>
        ) : (
          <pre className="response">
            {data ? JSON.stringify(data, null, 2) : 'No data received yet'}
          </pre>
        )}
      </section>

      <button onClick={() => refetch()} disabled={loading}>
        {loading ? 'Requesting…' : 'Run again'}
      </button>
    </main>
  )
}

export default App
