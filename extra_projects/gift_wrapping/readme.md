# Convex hull using gift wrapping

It is a computational algorithm
A convex hull is a polygon that contains all the points and the line joining two points is always less than 180.

We start with picking the leftmost point.
And then most second most leftmost relative to first point. And sort them along a radial point.

The 2d case is called the Jarvis march

Cross product can be applied on a 2D vector, 2 vectors that are on the same plane
A x B => if B is left of a then Z <0 else Z>0