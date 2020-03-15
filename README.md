# declarative-form-generator
A simple react form generator using functional programming concepts.
An explanation of how it works is being drafted!

## How to run

1. `git clone https://github.com/dbagia/declarative-form-generator.git`
2. `yarn`
3. `yarn start`
4. `Go to http://localhost:8080`

You should see a form rendered in the browser with some fields. Keying in any text or changing the drop-down value should log the entered data in the console. 

## How does it work?
The core idea behind the form generator is to use a schema to render form in the UI. 

The form schema is a JSON structure, an array of objects, each representing an input field on the form. 

The generator takes this JSON structure as an input and returns a list of React Components, each corresponding to the object in the JSON structure at that position.

## The Concept
The generator has been built using a simple concept from Category Theory in order to render the form from an array of input fields. 

Below is an example of form schema:

```
[
  {
    "type": "text",
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
    "type": "text",
    "label": "Last Name",
    "required": true,
    "placeholder": "last name",
    "defaultValue": "x",
    "readOnly": false,
    "name": "lname"
  }
]
```

The responsibility of the generator is to transform the above form schema into an array of ```React/JSX``` elements like so:

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
The process of this transformation has been developed using ```composition```, ```currying``` and ```Monads``` by using [Crocks Library](https://github.com/evilsoft/crocks).

## A bit of Category Theory

This section explains the above transformation process using diagrams. 

Let's first draw the final diagram and then we will zoom into the details. 

![A map from JSON to React Elements](/generateForm.PNG)

This diagram is depicting two sets A and B and a map *```f```* which performs the transformation from A to B. Set A is the list of JSON objects, the schema of the form and Set B is the list of React Elements. 

The map *```f```* is however a composition and we can expand this diagram to describe the actual design of this transformation.

Starting from the form schema, as stated, it is a list of input fields. We can define transformations for individual field types (text, select, radio, checkbox etc) and compose all of them together to get to our final *```f```*.

Let's take the input text example. 

### Transforming text types

We want to transform all the fields in the form schema which are of type ```text```. So after the transformation, we should have a set consisting of all the fields in form schema with fields with type ```text``` transformed into it's JSX equivalents. Let's call this set M. 

![map processInputs](/processInputs.PNG)

In the above diagram, we have two sets ```A``` and ```M``` and a map *```textInputs```* which performs the trainsition from set ```A``` to set ```M```.

Notice that the map *```textInputs```* is only transforming those elements in set ```A``` whose type is ```text```. It is not transorming any other types. This has been indicated by black arrows (performing transformation) and red arrows (bypassing without transforming) in the diagram. 

### Transforming list types

Next, we want to transform all the fields in the form schema which are of type ```list``` to JSX ```select``` elements. We have a map called *```lists```* to do this. 

![map processLists](/processLists.PNG)

As you might have noticed, our map *```lists```* does not perform any transformations on ```input``` JSX elements. 

### Transforming other types

We can continue creating additional maps for other types like radio buttons, checkbox, file upload etc and continue to perform transformations on our set. 

### Putting it all together

Below is how a final transformation will look like starting from Set A to Set B. 

![map processInputs and processLists](/aToB.PNG)

The laws of Category Theory allow us to combine more than one maps through ```composition```. Hence, if we use composition on the above diagram, we can combine the maps *```textInputs```* and *```lists```* into a single map like so:

![map composition](/composition.PNG)

The above diagram is the same as we started with: (map *```f```* ).

## Thinking Declaratively

I have spent a lot of time trying to figure this out. The most useful resource I have found so far is Kevlin Henney's [talk](https://www.youtube.com/watch?v=NSzsYWckGd4) on declarative thinking.

In a declarative/functional paradigm, you tell the computer what you need rather than how you want the computer to get it. The "how" part is left for the computer to decide. 

But how can we actually describe the "what" part in programming? 

**Describe the properties of the domain/problem**

For instance, consider the problem of [balanced brackets](https://www.hackerrank.com/challenges/balanced-brackets/problem). One of the imperative ways of solving this problem is using Stack Data Structure. 

Using the declarative approach, the properties of this problem are as below:

1. The input is a string of variable length and only allows {, [, (, }, ] and )

2. If the input length is odd, it is unbalanced (it is just not possible to have balanced brackets with odd number of characters)

3. If the input length is even, then for every opening brace of type (, { or [ there is an equivalent closing brace at a distance double the length of other opening braces after the current opening brace

You can have a look at the declarative solution [here](https://github.com/dbagia/declarative-demos/tree/master/demos/balanced-brackets)

## Container Style Programming
### ...

## References

* [Prof Frisby's Mostly Adequate Guide to Functional Programming](https://drboolean.gitbooks.io/mostly-adequate-guide/)
* [Declarative Thinking](https://www.youtube.com/watch?v=NSzsYWckGd4)
* [Crocks Library](https://evilsoft.github.io/crocks/docs/crocks/)
