Tyler Bare
~8 hours completion time, but wanted to make sure it was organized and not sloppy. I testify that this work was completed by myself.

Clicking on the main table row will pop up a modal containing all the data for that row. You can use the left/right arrows to change row data being used. The up/down arrows will switch between different parts of the data to display, but still using the same row data. In the modal header the title is also toggleable in order to display basic data that was already shown on the main page table.

Here are some things I could have done better:

1. if I had more time(more than ~8 hours), in order to make this application more scalable I would not have used "prop drilling" but instead would have set up either a useContext Hook or a Redux store for the state management. [I prefer Redux over useContext for scalability]
2. Technically all my css modules are global scope and this could introduce CSS bugs later down the road. I could have set up "CSS Modules" to keep css better scoped. [That's what I use in my personal projects]
3. I didn't write any unit tests, though tests are important to make sure future changes dont break already working features. Probably could've automated some tests with Selenium.
4. Clicking the modal header toggles extra data. It is slightly jarring, and might have been better as another "chart view" to be seen with the up/down arrows.
5. Use variables for CSS theme colors so I don't have it copy pasted everywhere.

