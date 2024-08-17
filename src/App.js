import React, { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <header className="bg-blue-600 dark:bg-gray-800 p-4 fixed top-0 left-0 w-full z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-white text-2xl font-bold">
              Book Generator API
            </h1>
            <nav className="flex space-x-4">
              <a
                href="/"
                className="text-white hover:text-sky-300 dark:hover:text-sky-400"
              >
                Overview
              </a>
              <a
                href="/"
                className="text-white hover:text-sky-300 dark:hover:text-sky-400"
              >
                Authentication
              </a>
              <a
                href="/"
                className="text-white hover:text-sky-300 dark:hover:text-sky-400"
              >
                Endpoints
              </a>
              <a
                href="/"
                className="text-white hover:text-sky-300 dark:hover:text-sky-400"
              >
                Tutorial
              </a>
              <a
                href="/"
                className="text-white hover:text-sky-300 dark:hover:text-sky-400"
              >
                Code Examples
              </a>
              <a
                href="/"
                className="text-white hover:text-sky-300 dark:hover:text-sky-400"
              >
                Pricing
              </a>
            </nav>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-white text-black dark:bg-gray-600 dark:text-white px-4 py-2 rounded-md"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </header>

        <main className="pt-20 max-w-4xl mx-auto p-8">
          <section className="mb-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Overview
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              The Book Generator API allows you to generate books on various
              topics using different language models. This documentation
              provides details on how to use the API, including authentication,
              available endpoints, and code examples.
            </p>
          </section>

          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Authentication
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              To use the API, you need to include your API key in the header of
              each request:
            </p>
            <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 p-4 rounded-md mt-4">
              <code>X-API-Key: YOUR_API_KEY</code>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              To generate an API key, use the button below:
            </p>
            <button className="bg-blue-600 text-white dark:bg-blue-700 px-4 py-2 mt-4 rounded-md">
              Generate API Key
            </button>
          </section>

          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mt-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Endpoints
            </h2>

            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Generate Book
              </h3>
              <div className="flex items-center space-x-4 mt-2">
                <span className="bg-teal-500 text-white px-3 py-1 rounded-md">
                  POST
                </span>
                <span className="bg-purple-500 text-white px-3 py-1 rounded-md">
                  /api/generate-book
                </span>
              </div>

              <h4 className="mt-6 text-lg font-semibold text-gray-900 dark:text-gray-100">
                Request Body
              </h4>
              <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg mt-2">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left text-blue-500 dark:text-blue-400">
                        PARAMETER
                      </th>
                      <th className="text-left text-blue-500 dark:text-blue-400">
                        TYPE
                      </th>
                      <th className="text-left text-blue-500 dark:text-blue-400">
                        DESCRIPTION
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-gray-900 dark:text-gray-200 py-2">
                        api
                      </td>
                      <td className="text-gray-900 dark:text-gray-200 py-2">
                        string
                      </td>
                      <td className="text-gray-700 dark:text-gray-300 py-2">
                        The API provider to use. Options: "openai" or "together"
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-900 dark:text-gray-200 py-2">
                        model
                      </td>
                      <td className="text-gray-900 dark:text-gray-200 py-2">
                        string
                      </td>
                      <td className="text-gray-700 dark:text-gray-300 py-2">
                        The specific model to use (e.g., "gpt-3.5-turbo",
                        "gpt-4", "llama-2-70b")
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-900 dark:text-gray-200 py-2">
                        topic
                      </td>
                      <td className="text-gray-900 dark:text-gray-200 py-2">
                        string
                      </td>
                      <td className="text-gray-700 dark:text-gray-300 py-2">
                        The main topic or theme of the book
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-900 dark:text-gray-200 py-2">
                        language
                      </td>
                      <td className="text-gray-900 dark:text-gray-200 py-2">
                        string
                      </td>
                      <td className="text-gray-700 dark:text-gray-300 py-2">
                        The language in which the book should be generated
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-900 dark:text-gray-200 py-2">
                        word_count
                      </td>
                      <td className="text-gray-900 dark:text-gray-200 py-2">
                        integer
                      </td>
                      <td className="text-gray-700 dark:text-gray-300 py-2">
                        The approximate number of words for the generated book
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4 className="mt-6 text-lg font-semibold text-gray-900 dark:text-gray-100">
                Response
              </h4>
              <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg mt-2">
                <pre className="text-gray-900 dark:text-gray-200">
                  {`{
  "message": "Book generation started",
  "job_id": "unique-job-identifier"
}`}
                </pre>
              </div>
            </div>
          </section>

          {/* Tutorial Section */}
          <section className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Tutorial
            </h2>
            <div className="mt-4">
              <h3 className="text-2xl font-semibold text-sky-600 dark:text-sky-400">
                Step 1: Obtain an API Key
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Generate an API key using the button in the Authentication
                section above.
              </p>
            </div>
            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-sky-600 dark:text-sky-400">
                Step 2: Make a Request
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Use your preferred programming language or tool to make a POST
                request to the
                <code className="bg-gray-300 dark:bg-gray-700 px-1 py-0.5 rounded">
                  /api/generate-book
                </code>
                endpoint. Include your API key in the header and the required
                parameters in the request body.
              </p>
            </div>
            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-sky-600 dark:text-sky-400">
                Step 3: Handle the Response
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                The API will return a response with a job ID. You can use this
                ID to check the status of your book generation job.
              </p>
            </div>
            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-sky-600 dark:text-sky-400">
                Step 4: Retrieve the Generated Book
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Once the job is complete, you can retrieve the generated book
                using the job ID (endpoint to be implemented).
              </p>
            </div>
          </section>

          {/* Code Examples Section */}
          <section className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Code Examples
            </h2>

            <div className="mt-4">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                Python
              </h3>
              <div className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 p-4 rounded-lg mt-2 overflow-x-auto">
                <pre>
                  <code>
                    {`import requests

API_ENDPOINT = 'https://tryBookAI.com/api/generate-book'
headers = {
    'Content-Type': 'application/json',
    'X-API-Key': 'API_KEY'
}
data = {
    'topic': 'Artificial Intelligence',
    'word_count': 5000
}

response = requests.post(API_ENDPOINT, json=data, headers=headers)

if response.status_code == 200:
    print(f'Book generation started. Job ID: {response.json()["job_id"]}')
else:
    print(f'Error: {response.status_code} - {response.text}')`}
                  </code>
                </pre>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                JavaScript (Node.js)
              </h3>
              <div className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 p-4 rounded-lg mt-2 overflow-x-auto">
                <pre>
                  <code>
                    {`const axios = require('axios');

const API_ENDPOINT = 'https://tryBookAI.com/api/generate-book';
const headers = {
    'Content-Type': 'application/json',
    'X-API-Key': 'API_KEY'
};

const data = {
    'topic': 'Artificial Intelligence',
    'word_count': 5000
};

axios.post(API_ENDPOINT, data, { headers })
    .then(response => {
        console.log('Book generation started. Job ID:', response.data.job_id);
    })
    .catch(error => {
        console.error('Error:', error.response ? error.response.data : error.message);
    });`}
                  </code>
                </pre>
              </div>
            </div>
          </section>

          {/* API Pricing Section */}
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mt-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              API Pricing
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              Our API pricing is based on the model used and the number of
              tokens processed. Here's a breakdown of the costs:
            </p>
            <div className="mt-6 bg-gray-200 dark:bg-gray-700 p-4 rounded-lg">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left text-blue-500 dark:text-blue-400">
                      API
                    </th>
                    <th className="text-left text-blue-500 dark:text-blue-400">
                      MODEL
                    </th>
                    <th className="text-left text-blue-500 dark:text-blue-400">
                      PRICE PER 1K TOKENS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-gray-900 dark:text-gray-200 py-2">
                      OpenAI
                    </td>
                    <td className="text-gray-900 dark:text-gray-200 py-2">
                      GPT-3.5
                    </td>
                    <td className="text-gray-900 dark:text-gray-200 py-2">
                      $0.002
                    </td>
                  </tr>
                  <tr>
                    <td className="text-gray-900 dark:text-gray-200 py-2">
                      OpenAI
                    </td>
                    <td className="text-gray-900 dark:text-gray-200 py-2">
                      GPT-4
                    </td>
                    <td className="text-gray-900 dark:text-gray-200 py-2">
                      $0.03
                    </td>
                  </tr>
                  <tr>
                    <td className="text-gray-900 dark:text-gray-200 py-2">
                      Together AI
                    </td>
                    <td className="text-gray-900 dark:text-gray-200 py-2">
                      Llama-2-70b
                    </td>
                    <td className="text-gray-900 dark:text-gray-200 py-2">
                      $0.0008
                    </td>
                  </tr>
                  <tr>
                    <td className="text-gray-900 dark:text-gray-200 py-2">
                      Together AI
                    </td>
                    <td className="text-gray-900 dark:text-gray-200 py-2">
                      Llama-2-13b
                    </td>
                    <td className="text-gray-900 dark:text-gray-200 py-2">
                      $0.0006
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mt-6">
              On average, 1 token is approximately 4 characters or 0.75 words.
              For precise pricing, we recommend using our token calculator tool.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              You will only be charged for the tokens used in generating the
              book. The API tracks token usage and bills accordingly. Detailed
              usage reports are available in your account dashboard.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
