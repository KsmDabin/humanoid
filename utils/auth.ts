import { ClientSecretCredential } from "@azure/identity";
import { TokenCredentialAuthenticationProvider } from "@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials";

export async function getToken() {
  try {
    const credential = new ClientSecretCredential(
      process.env.SHAREPOINT_TENANT_ID!,
      process.env.SHAREPOINT_CLIENT_ID!,
      process.env.SHAREPOINT_CLIENT_SECRET!
    );

    const authProvider = new TokenCredentialAuthenticationProvider(credential, {
      scopes: ['https://graph.microsoft.com/.default']
    });

    const token = await new Promise<string>((resolve, reject) => {
      authProvider.getAccessToken().then(response => {
        resolve(response);
      }).catch(error => {
        reject(error);
      });
    });

    return token;
  } catch (error) {
    console.error('Token acquisition failed:', error);
    throw error;
  }
} 