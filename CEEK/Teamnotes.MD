Met online 9/20 to share our progress and figure out how to make some of these functions work together.

What We've learned:
Scope is self-contained
Using slots
Making the same button and changing styles and conventions
Style everything using basic hml, reverse engineer to make it what you want (Live demo)

What We Plan To Work On:
Make our button more professional
Add other required functionality
Try incorporating icons
Increase accessability
Support color variations
Try and use different elements from buttons and put them into our own button

Meetings:
Thursdays after class, option to meet on Zoom

<<<<<<< HEAD
Tuesday 9/28: Group Code Comparisions 
Similarities: Both our button and the easy button had a few baseline similarities in the strucuture of the button. We both used CSS variables and states that allowed our buttons to change color, background, and state based when selecting a disabled option. The implementation and functionality of our disabled state was very similar. 
Differences: The easy button had CSS variables that allowed them to change the perspective of their button from 2D to 3D perspectives. They also were able to create shaders and shadows on their button to make it look visually more pleasing. Our button did not have any shadow state functionality and we did not have the ability to change the perspective of our button. Our button is just a simple link with 2 icons on it. 
Leveraging Code: 
We want to use the lines below to add these default values to the properties and use them to improve the functionality of our constructor as discussed in class.
if(this.icon==undefined){


      this.icon = false;

    }

    if(this.disabled){

       this.link = null;

    }

    if(this.buttonText==""){

      this.buttonText = null;

    }
    
    if(this.link==undefined){

      
      this.link = null;
    }

=======
Thursday: 
Added Icon functionallity 
Having issues with Icons 
>>>>>>> b9b6ec559e59e29fd5059acfa86ccd9036713694
