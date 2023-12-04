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
