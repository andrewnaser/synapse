import { NextRequest, NextResponse } from 'next/server'

const RAPIDAPI_KEY = 'e58a784d0dmsh8c00f2f58365008p103943jsn729926f8c316'
const RAPIDAPI_HOST = 'chatgpt-42.p.rapidapi.com'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { systemPrompt, userMessage, temperature = 0.9, maxTokens = 1024 } = body

    if (!userMessage) {
      return NextResponse.json(
        { error: 'User message is required' },
        { status: 400 }
      )
    }

    const response = await fetch('https://chatgpt-42.p.rapidapi.com/conversationgpt4', {
      method: 'POST',
      headers: {
        'x-rapidapi-key': RAPIDAPI_KEY,
        'x-rapidapi-host': RAPIDAPI_HOST,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: [
          {
            role: 'user',
            content: userMessage,
          },
        ],
        system_prompt: systemPrompt || '',
        temperature: temperature,
        top_k: 5,
        top_p: 0.9,
        max_tokens: maxTokens,
        web_access: false,
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('ChatGPT API Error:', errorText)
      return NextResponse.json(
        { error: 'Failed to generate response' },
        { status: response.status }
      )
    }

    const data = await response.json()
    
    // The API returns the response in different formats, handle both
    let generatedText = ''
    if (data.result) {
      generatedText = data.result
    } else if (data.response) {
      generatedText = data.response
    } else if (data.choices && data.choices[0]) {
      generatedText = data.choices[0].message?.content || data.choices[0].text
    } else if (typeof data === 'string') {
      generatedText = data
    } else {
      generatedText = JSON.stringify(data)
    }

    return NextResponse.json({ 
      success: true,
      output: generatedText 
    })

  } catch (error) {
    console.error('Generation error:', error)
    return NextResponse.json(
      { error: 'An error occurred during generation' },
      { status: 500 }
    )
  }
}
