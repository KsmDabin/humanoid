import { useEffect, useState } from 'react'
import { Client } from "@microsoft/microsoft-graph-client"
import { TokenCredentialAuthenticationProvider } from "@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials"
import { ClientSecretCredential } from "@azure/identity"

export default function Home() {
  const [data, setData] = useState(null)

  useEffect(() => {
    // Azure AD 앱 등록 정보
    const credential = new ClientSecretCredential(
      process.env.NEXT_PUBLIC_TENANT_ID!,
      process.env.NEXT_PUBLIC_CLIENT_ID!,
      process.env.NEXT_PUBLIC_CLIENT_SECRET!
    )

    const authProvider = new TokenCredentialAuthenticationProvider(credential, {
      scopes: ['https://graph.microsoft.com/.default']
    })

    const client = Client.initWithMiddleware({
      authProvider: authProvider
    })

    async function getData() {
      try {
        const response = await client.api('/users').get()
        setData(response)
      } catch (error) {
        console.error(error)
      }
    }

    getData()
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold">Microsoft Graph API Test</h1>
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      </div>
    </main>
  )
} 