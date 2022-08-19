## Contacts-App:

<img src="https://user-images.githubusercontent.com/62475313/95621512-d5bbbc80-0a3f-11eb-817e-0d48d2c536e6.png" alt="app-preview"></img>

### STACK:
**React** for frontend,

**Material UI** as a UI library ,

**Redux** for state management,

**Reselect** to implement filter and statistics, avoiding performance issues,

**Redux-saga** for asynchronous store update.

## &#9758; Complete MVP:

<img src="https://user-images.githubusercontent.com/62475313/95629461-fdb21c80-0a4d-11eb-8cfe-0439f0796cb8.png" alt="Contacts-app" border="0" width="100%">


### Two settings of data viewing:
* tabular view
* tiled view

### Contact's list view:
* user's birthday must be in US format
* email must be clickable using copy
* phone must be clickable with copy
* address must be in the format: / country / street number street name, city, state zip code
street number street name, city, state code

### Ability to filter data: (Reselect)
* by full name;
* by gender;
* by nationality;

### Data Statistics: (Reselect)
* collection size
* number of men, women and indetermitate
* who is predominant
* number of contacts for each nationality

#### More about filter: 
* Filter happens without manual form submit.
* Clearing the filter returns the collection to its original state.
* The entire collection gets filtered.

#### What else is there?
By clicking on the user's name or avatar, there is a transition to the page for viewing user data
When returning from the view page to the contact list page, the previously selected filter, sorting and pagination state must be saved and applied.

#### What I would like to improve in my application:
Mobile version requires adjustments;
Error message when returning an error from an API request;


