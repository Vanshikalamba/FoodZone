/\*\*

- Header
- -Logo
- -Other items
- Body
- -search
- -Restaurantcontainer
- -Restaurantcard
- Footer
- -copyright
- -links
- -address
- -contact
- \*/

#config driven api->
all ui is based on data
can be different based on different data

#to make array separated with comma or anything use : arr.join(" ,");

#cloudinary is a CDN were all images are kept
#optional chaining:
const [a,b,c,d]=reddata?.data

#keys are imp in React (in case of lists or loop) because in case of elements at same level , the rendering will be optimised .
if ids wont be present then react will rerender all the 15 restaurants .
if one more card is added

if ids were present , and new card comes up .... it will just render the new card .
(very imp for performance-> to uniquely identify the element and skip unneccesary rendering)

#in case of map or loop -> index is used (that is not a good practice)
eg : key ={index}

#default export
#named export-> TO export multiple things in single file

#onClick is an attribute that takes callback function

#React can do faster DOM manipulation
--> State is a super powerful variables (useState Hook used to create this super powerful variable)
React Hook - a normal js function that comes with some super power (utility function)
-useState()->to generate state variable
-useEffect()

#whenever a state variable changes , react will rerender the component

#Reconciliation Algorithm or React Fiber : a new way of finding DOM and updating component(using virtual DOM)
-virtual DOM is representation of actual DOM(it is just an js object )
#Diff Algo : finds the diff between updated and previous Virtual DOM(updated and prev object diff
)
-react can do effecient DOM manipulation
This algo is making React Faster

#conditional rendering :
if you render comp based on condition then it is known as conditional rendering

#why do we use useState (exactly)->
1.if we update the js variables normally , it will get updated but UI /Components won't rerender on each updation...
for this state variables are required (using useState) 2. we can't directly modify state variables , for it we need a setState function(it will trigger rerendering of component)

#on state change only that element will be rendered or whole component ?
whole parent div that is being returned by that component will be rerendered (because new state variable is created)but only that particular element or btn will be modified rest will stay as it is

#how can we modify const var while using useSate?

#<input type="search" className="search-btn" value={searchText} />
-->searchtText is a state variable
-->Here input box is not working and i can't write text in it , why ?
Ans ->because during state variable declaration we have given it an empty value
2.we have to update the searchText based on what we write
using onChange={(e)=>setSearchText(e.target.vale)}
inside <input/>

#whenever State variables update , react triggers reconciliation cycle(re-renders the component);
