# Pectus Finance task

## Screenshots
![Home Page](./screenshots/home.png?raw=true "Home Page")
![Filter Group 1](./screenshots/filter1.png?raw=true "Filter Group 1")
![Filter Page 2](./screenshots/filter2.png?raw=true "Filter Group 2")

## Requirement
Create a feature to show user uploaded expanses (you can find sample expanses.csv file in this repository which you can 
use as a mock data for your work) data in tabular form and letting user perform some basic set of operations over data 
such as sort and filter.
- I want to see an expanses' data in tabular form.
- I should be able to perform sort(asc/descending order) operation by clicking on each column header
- I should be able to see total sum of expanses by departments, project_name, date and by member_name
- I should be able to see total sum of value in amount column

## Setups and Run Project
In the project directory, you can run:

### `yarn install`
Install all necessary packages for project.

### `yarn start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Short Explanation
I implemented as you want in description. Such as display expense data into tabular form, and it will be sortable by 
clicking header column. Second one, when we select any category then display all records by Group and also display total
amount. I want to explain little more about in bullet form.
- Converted CSV file data into json format and store it into src/constant/data.json file.
- Configure husky, linter and prettier. 'git commit' will not be successfully until we fixed all eslint and prettier rules.
According to this approach we maintain our code structure.
- Used react-router-dom library for Routes to redirect between Home page and Filter By Category Report Page.
- In Home Page, I create reusable component "SortableTable". I created it generic to use everywhere in project. Everything
is working perfectly but during re-usability sorting by "Date" and "Amount" is not working properly Because "Amount" have 
currency sign and according to "Date". I need more time to cover both scenarios. Everything is possible but its taking 
sometime.
- I am not using any library for designing web page (such as material-ui, antd and react-bootstrap etc.) I used Styled-component
with pure html5. Try to design similar same as in figma file.
- Not using lodash library. perform all operation using ES6 onwards.
