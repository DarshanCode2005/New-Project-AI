const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
 
    export const GenerateCourseLayout_AI = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate A Course Tutorial on following detail with field as Course Name, Description, Along with Chapter Name, about , Duration: Category:'Programming', Topic: Python,Level: Basic,Duration: 1 hours, NoOf Chapters: 5, in JSON format"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"courseName\": \"Python Fundamentals for Beginners\",\n  \"description\": \"This course provides a gentle introduction to the Python programming language. It is designed for individuals with no prior programming experience and will equip you with the basic skills needed to start writing simple Python programs.\",\n  \"category\": \"Programming\",\n  \"topic\": \"Python\",\n  \"level\": \"Basic\",\n  \"duration\": \"1 hour\",\n  \"noOfChapters\": 5,\n  \"chapters\": [\n    {\n      \"chapterName\": \"Chapter 1: Getting Started with Python\",\n      \"about\": \"This chapter will guide you through setting up your Python environment, understanding the basic syntax, and writing your first Python program.\",\n      \"duration\": \"15 minutes\"\n    },\n    {\n      \"chapterName\": \"Chapter 2: Variables and Data Types\",\n       \"about\": \"Learn about variables, different data types in Python like integers, floats, strings, and booleans, and how to use them effectively.\",\n      \"duration\": \"15 minutes\"\n    },\n    {\n      \"chapterName\": \"Chapter 3: Operators and Expressions\",\n      \"about\": \"Explore various operators in Python (arithmetic, comparison, logical) and learn how to build expressions to perform calculations and make decisions.\",\n      \"duration\": \"10 minutes\"\n    },\n     {\n      \"chapterName\": \"Chapter 4: Control Flow - If Statements\",\n      \"about\": \"Learn how to control the flow of your program using 'if' statements to execute different blocks of code based on conditions.\",\n      \"duration\": \"10 minutes\"\n    },\n     {\n      \"chapterName\": \"Chapter 5: Basic Input and Output\",\n       \"about\": \"Discover how to take input from the user and display output to the console using built-in functions.\",\n      \"duration\": \"10 minutes\"\n    }\n  ]\n}\n```\n"},
          ],
        },
      ],
    });
  