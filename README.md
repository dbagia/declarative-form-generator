# declarative-form-generator
A simple react form generator using functional programming concepts.
An explanation of how it works is being drafted!

## How does it work?
The core idea behind the form generator is to use a schema to render form in the UI. 

The form schema is a JSON structure, an array of objects, each representing an input field on the form. 

The ```generator``` takes this JSON structure as an input and returns a list of React Components, each corresponding to the object in the JSON structure at that position.

## The Concept
The ```generator``` has been built using a simple concept from Category Theory in order to render the form from an array of input fields. 

Below is an example of form schema:

```
[
  {
    "type": "string",
    "label": "First Name",
    "required": true,
    "placeholder": "first name",
    "readOnly": false,
    "name": "fname"
  },
  {
    "type": "list",
    "lookupId": "id",
    "lookupDisplay": "name",
    "lookupUrl": "http://localhost:8080/cities",
    "defaultValue": 2,
    "readOnly": false,
    "required": true,
    "label": "City",
    "name": "city",
    "placeholder": "city"
  },
  {
    "type": "string",
    "label": "Last Name",
    "required": true,
    "placeholder": "last name",
    "defaultValue": "x",
    "readOnly": false,
    "name": "lname"
  }
]
```

The responsibility of the ```generator``` is to transform the above form schema into an array of ```React/JSX``` elements like so:

```
[
  <div>
    <label>First Name</label>
    <input
      type='text'
      required=true
      placeholder='first name'
      readOnly=false
      name='fname'
      onChange=<onChange Handler inserted by the generator>
      />
  </div>,
  ...
]
```
The process of this transformation has been developed using ```composition```, ```currying``` and ```Maybe Monad```.

## A bit of Category Theory

This section explains the above transformation process using diagrams. 

Let's first draw the final diagram and then we will zoom into the details. 

![A map from JSON to React Elements](/generateForm.PNG)

This diagram is depicting two sets A and B and a map ```generateForm``` which performs the transformation from A to B. Set A is the list of JSON objects, the schema of the form and Set B is the list of React Elements. 

The map ```generateForm``` is however a composition and we can expand this diagram to describe the actual design of this transformation.

Starting from the form schema, as stated, it is a list of input fields. We can define transformations for individual field types (text, select, radio, checkbox etc) and compose all of them together to get to our final ```generateForm```.

Let's take the input text example. 

We want to transform all the fields in the form schema which are of type ```string```. So after the transformation, we should have a set consisting of all the fields in form schema with fields with type ```string``` transformed into it's React equivalents. Let's call this set M. 

![map processInputs](/processInputs.PNG)

## To-do

* add tests using Jest
* update documentation
