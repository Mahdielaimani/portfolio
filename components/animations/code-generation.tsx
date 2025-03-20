"use client"

import { useEffect, useState } from "react"

interface CodeGenerationProps {
  className?: string
  speed?: number
  lines?: number
}

export default function CodeGeneration({ className = "", speed = 50, lines = 10 }: CodeGenerationProps) {
  const [code, setCode] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)

  // Sample Python code snippets for AI
  const pythonSnippets = [
    "import tensorflow as tf",
    "from transformers import AutoModelForCausalLM, AutoTokenizer",
    'model = AutoModelForCausalLM.from_pretrained("gpt2")',
    'tokenizer = AutoTokenizer.from_pretrained("gpt2")',
    "def generate_text(prompt, max_length=50):",
    '    inputs = tokenizer(prompt, return_tensors="pt")',
    "    outputs = model.generate(**inputs, max_length=max_length)",
    "    return tokenizer.decode(outputs[0], skip_special_tokens=True)",
    "",
    "class NeuralNetwork(tf.keras.Model):",
    "    def __init__(self):",
    "        super().__init__()",
    '        self.dense1 = tf.keras.layers.Dense(128, activation="relu")',
    '        self.dense2 = tf.keras.layers.Dense(64, activation="relu")',
    '        self.dense3 = tf.keras.layers.Dense(10, activation="softmax")',
    "",
    "    def call(self, inputs):",
    "        x = self.dense1(inputs)",
    "        x = self.dense2(x)",
    "        return self.dense3(x)",
    "",
    "def train_model(model, x_train, y_train, epochs=10):",
    "    model.compile(",
    '        optimizer="adam",',
    '        loss="sparse_categorical_crossentropy",',
    '        metrics=["accuracy"]',
    "    )",
    "    return model.fit(x_train, y_train, epochs=epochs)",
    "",
    "import numpy as np",
    "from sklearn.model_selection import train_test_split",
    "from sklearn.preprocessing import StandardScaler",
    "",
    "def preprocess_data(X, y):",
    "    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)",
    "    scaler = StandardScaler()",
    "    X_train = scaler.fit_transform(X_train)",
    "    X_test = scaler.transform(X_test)",
    "    return X_train, X_test, y_train, y_test",
  ]

  useEffect(() => {
    // Initialize with empty lines
    setCode(Array(lines).fill(""))

    // Start typing animation
    const interval = setInterval(() => {
      setCode((prevCode) => {
        const newCode = [...prevCode]

        // Get current line from snippets
        const lineIndex = currentLine % pythonSnippets.length
        const fullLine = pythonSnippets[lineIndex]

        // Update current line with next character
        if (currentChar < fullLine.length) {
          newCode[currentLine % lines] = fullLine.substring(0, currentChar + 1)
          setCurrentChar(currentChar + 1)
        } else {
          // Move to next line
          setCurrentLine(currentLine + 1)
          setCurrentChar(0)
        }

        return newCode
      })
    }, speed)

    return () => clearInterval(interval)
  }, [currentLine, currentChar, lines, speed])

  return (
    <div className={`font-mono text-xs overflow-hidden ${className}`}>
      <pre className="p-4 bg-black bg-opacity-80 text-green-400 rounded-md h-full overflow-hidden">
        {code.map((line, index) => (
          <div key={index} className="whitespace-pre">
            <span className="text-gray-500 mr-2">{index + 1}</span>
            {line}
            {index === currentLine % lines && <span className="animate-blink">|</span>}
          </div>
        ))}
      </pre>
    </div>
  )
}

