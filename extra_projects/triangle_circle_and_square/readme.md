# TRIANGLES CIRCLES AND SQUARES

from : https://www.youtube.com/watch?v=3MqJzMvHE3E

See `generating_datasets` for how to get the pictures for training set

![generate](generating_dataset.gif)

Then use `data/cruncher.py` for renaming

Now we need to actually train and create a model

Slow training:
![breakdance](breakdance_training.gif)

![trained](trained.png)

But it is wrong it shows a circle a triangle
![triangle](triangle.png)

https://editor.p5js.org/fanbyprinciple/sketches/6xtWBBjBt

After modifying the model due to the location of square on test data we have a spatial dependence on shape size

bigger is classified as square.

![spatial_problem](spatial_problem.gif)


But shiffman model seems to work just fine
![shiffman](shiffman_ggod.gif)

https://editor.p5js.org/fanbyprinciple/sketches/dpeLgD_Vh