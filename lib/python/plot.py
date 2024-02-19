import matplotlib.pyplot as plt
import pandas as pd
import numpy as np

matrix = np.load("output/matrix.npy")
print(np.mean(matrix))
print(np.quantile(matrix, 0.95))

plt.imshow(matrix, vmax=0.81)
plt.show() 