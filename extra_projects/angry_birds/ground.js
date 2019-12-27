class ground extends Box{
    constructor(x,y,w,h){
        super(x,y,w,h)
    }

}

layer_names = []
for layer in model.layers[:8]:
    layer_names.append(layer.name)
    
images_per_row = 16

for (layer_name, layer_activation) in zip(layer_names, activations):
    n_features = layer_activation.shape[-1]
    
    size = layer_activation.shape[1]
    
    n_cols = n_features // images_per_row
    
    display_grid = np.zeros((size * n_cols, images_per_row * size))
   
    for col in range(n_cols):
        for row in range(images_per_row):
            channel_image = layer_activation[0,
                                           :, :,
                                           col * images_per_row + row -1]
           
            channel_image -= channel_image.mean()
            channel_image /= channel_image.std()
            channel_image *= 64
            channel_image += 128
            channel_image = np.clip(channel_image, 0, 255).astype('uint8')
            display_grid[col * size : (col + 1) * size,
                        row * size : (row + 1) * size] = channel_image
           
            scale = 1. / size
            plt.figure(figsize = (scale * display_grid.shape[1],
                                 scale * display_grid.shape[0]))
            plt.title(layer_name)
            plt.grid(False)
            plt.imshow(display_grid, aspect='auto', cmap='viridis')
   
           