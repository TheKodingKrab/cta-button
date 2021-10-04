<h1>Team Notes</h1>
We met Monday (9/20) in order to work on the button together and come up with ideas for execution. 
<br>
<br>
<b>Learned today (9/21)</b>
<br>
We learned how to edit the demo files for better tests. Our only work had previously been in the src.
<br>
<br>
<b>Next steps</b>
<br>
Next we will try to fix our naming convenion issues. The underscore was a typo that has created many problems. We hope to resovle this issue(s) timely. We would also like to try to edit the style of the button to look a little more like the one we based it off of.
<br>
<br>
<b>Class Work (9/23)</b>
<br>
Today, we worked on adding an icon to our button. Hannah followed along with the demo and updated the repo with icon functionality. Taylor worked on storybook funcitonality and adding the necessary files for that. 
<br>
<br>
<b>Weekend Work (9/25 - 9/26)</b>
<br>
This weekend, we worked on the styling of the button to make it look like the website that we based it off of. We are very happy and satisfied on the way that it turned out and can't wait to more forward from this point into the final steps.
<br>
<br>
<b>Code Review (9/28)</b>
<br>
<br>
We had the chance to review some other button examples. Both projects had states listed as css selectors (there is hover and focus). This is because states are really important to a dynamic button. They are both buttons that link to something using an href in our render function. 
<br>
<br>
Some of the differences are what made the buttons unique. They had their disabled as a property, while we used ours as a CSS variable and a state. We also found differences in the way we implemented icon. They added it in after thier text in the button. They structured it with a variable for the icon call and sent it into their constructor from properties. We utilized event listeners in our code to ensure that events worked smoothly and to make the code more readable.
<br>
<br>
Something we would like to do with out button is add one of their interesting states. They included gradient and perspective which could really improve the animated-button.

```
      :host([perspective]){        
        transform: rotate3d(1, 0, 0, 30deg);
        box-shadow: 0px 5px 2px 0px darkgrey;
      }
      :host([gradient]) .--innerButton{
            background: linear-gradient(232deg, #FF5733, #ff4e4ea3);
      }
```
<b>Weekend Work (10/2 - 10/3)</b>
<br>
This weekend, we worked on the storybook of the button. We met on 10/3 to review and publish.
<br>
<br>
