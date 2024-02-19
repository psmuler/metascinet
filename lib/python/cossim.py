import pandas as pd
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity
from ast import literal_eval

df = pd.read_csv("output/embedded_100_reviews.csv")
em = df["ada_embedding"]
matrix = np.zeros((len(em),len(em)),dtype=float)

for i in range(len(em)):
    for j in range(i):
        array_1 = np.array([literal_eval(em[i])])
        array_2 = np.array([literal_eval(em[j])])
        cossim = cosine_similarity(array_1, array_2)
        matrix[i][j] = cossim[0][0]

np.save("output/matrix",matrix)
