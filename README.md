# Currency Converter 💱

A simple and interactive currency converter web application built using HTML, CSS, and JavaScript. It fetches real-time currency exchange rates from an external API and calculates the converted amount based on the selected currencies.

## 🚀 Live Demo

[View Live Demo](https://currency-converter-one-black.vercel.app/)

## 📌 About the Project

This Currency Converter allows users to convert an amount from one currency to another.

The application fetches exchange-rate data dynamically using the **Currency API** and updates the result whenever the user selects different currencies or enters a new amount.

The interface also displays the corresponding country flags for the selected currencies.

## ✨ Features

- 💱 Convert between different currencies
- 🌐 Fetch exchange rates from an external API
- 🇺🇸 Display country flags for selected currencies
- 🔄 Change source and target currencies dynamically
- ⚡ Fetch updated exchange-rate data without reloading the page
- 🧮 Calculate the converted amount automatically
- ⚠️ Validate the entered amount
- 📱 Simple and responsive user interface

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- Fetch API
- REST API
- DOM Manipulation
- Async/Await
- JSON

## 🌐 APIs Used

### Currency API

The application uses the **Fawaz Ahmed Currency API** to retrieve currency exchange rates.

```text
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies
```

The API provides exchange-rate data for different currencies.

### Flags API

Country flags are displayed using **FlagsAPI**.

```text
https://flagsapi.com/
```

The application maps currency codes to country codes and dynamically changes the flag when the selected currency changes.

## ⚙️ How It Works

1. The application loads the available currency codes into the dropdown menus.
2. USD is selected as the default **From** currency.
3. INR is selected as the default **To** currency.
4. When the user changes a currency, the corresponding country flag is updated.
5. When the user clicks the exchange button, the application:
   - Validates the entered amount.
   - Gets the selected currencies.
   - Converts the currency codes to lowercase.
   - Sends a request to the Currency API.
   - Retrieves the exchange rate.
   - Calculates the converted amount.
   - Displays the result.

For example:

```text
100 USD → INR

100 × current USD/INR exchange rate
```

## 📂 Project Structure

```text
currency-converter/
│
├── index.html
├── style.css
├── app.js
├── codes.js
└── README.md
```

> The exact filenames may differ depending on your project structure.

## ⚙️ How to Run Locally

1. Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

2. Navigate to the project directory:

```bash
cd currency-converter
```

3. Open `index.html` in your browser.

You can also use the **Live Server** extension in VS Code for easier development.

## 📚 What I Learned

While building this project, I practiced:

- Working with REST APIs
- Using the `fetch()` API
- Using `async/await`
- Handling promises
- Converting API responses into JSON
- Working with HTTP response status
- DOM manipulation
- Dynamically creating `<option>` elements
- Using JavaScript objects for currency-country mapping
- Updating images dynamically
- Form and button event handling
- Input validation
- Error handling with `try...catch`
- Template literals
- Working with external APIs

## 🔮 Future Improvements

- Add a swap currency button
- Add a loading indicator while fetching exchange rates
- Display the exchange rate separately
- Add conversion history
- Add charts for exchange-rate trends
- Improve error messages
- Add offline/error-state handling
- Add more detailed currency information
- Improve accessibility and keyboard navigation

## 👨‍💻 Author

**Bharath**

Built as part of my journey in learning JavaScript and web development.
