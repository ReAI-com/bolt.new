import { createAnthropic } from '@ai-sdk/anthropic';

export function getAnthropicModel(apiKey: string) {
  const anthropic = createAnthropic({
    apiKey,
    baseURL: 'https://api.vveai.com/v1',
    headers: {
      'x-api-key': apiKey,
      'Content-Type': 'application/json',
    },
  });

  return anthropic('claude-3-5-sonnet-20240620');
}
