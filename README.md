# Specifications

This project implements a dynamic input field with the following specifications:

1. **Interactive Input Field:**
   - Clicking on the input field triggers the display of a list of items.

2. **Dynamic Filtering:**
   - As you type in the input field, the list dynamically filters to show only the items that match the entered text.

3. **Selectable Items:**
   - Clicking on an item in the list turns it into a chip at the top of the input field.

4. **Automatic Adjustment:**
   - The input field adjusts automatically as items are selected, ensuring a smooth user experience.

5. **Chip Removal:**
   - Each chip at the top has an "X" icon.
   - Clicking the "X" icon removes the corresponding chip and adds the item back to the list.

6. **Exclusion from List:**
   - Once an item becomes a chip, it is excluded from the list to prevent duplicate selections.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Certainly! Here's a simple README template for the API used in your project:

# Random User API

This project utilizes the [Random User API](https://randomuser.me/) to fetch random user data for various functionalities, such as displaying user profiles in an input component.

## Overview

The Random User API is a free online service that provides randomly generated user data. It can be used for various purposes, including testing, user profile creation, and data visualization.

## Getting Started

To start using the Random User API in your project, you can make HTTP requests to the following endpoint:

```
https://randomuser.me/api/
```

### Example Request

Here is an example of making a GET request to the API to retrieve a random user:

```javascript
fetch('https://randomuser.me/api/')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error('Error fetching random user:', error);
  });
```

### Query Parameters

You can include query parameters to customize the API response. For example, to get 50 random users, you can use the following URL:

```
https://randomuser.me/api/?results=50
```

## Response Format

The API response is in JSON format and contains an object with the following structure:

```json
{
  "results": [
    {
      "gender": "...",
      "name": {
        "title": "...",
        "first": "...",
        "last": "..."
      },
      "location": {
        // ...
      },
      "email": "...",
      // ... other user details
    }
    // ... additional users if results > 1
  ],
  "info": {
    "seed": "...",
    "results": 1,
    "page": 1,
    "version": "..."
  }
}
```

## Additional Information

For more details about the available query parameters, response format, and usage guidelines, refer to the [Random User API documentation](https://randomuser.me/documentation).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

