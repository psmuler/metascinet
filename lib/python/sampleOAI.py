from openai import OpenAI
import pandas as pd

api_key = process.env.DB_HOST,


client = OpenAI(api_key=api_key)

def get_embedding(text, model="text-embedding-ada-002"):
   text = text.replace("\n", " ")
   return client.embeddings.create(input = [text], model=model).data[0].embedding

df = pd.read_json("./lib/sample.json")
print(df)
# res = get_embedding("湯山池は現在の鳥取市福部町（旧福部村）湯山地区一帯にあった。北は福部砂丘（鳥取砂丘の東部。「湯山砂丘」とも）によって日本海と隔てられており、南には摩尼山の山裾が迫っている。浜湯山から西へ峠を越すと多鯰ヶ池がある。現在は二級河川の塩見川の支流、江川の上流域にあたり、埋め立てによって海抜4m程度の低地になっている")
# res2 = get_embedding("")

# df = pd.read_csv('output/Reviews100.csv')
# df['ada_embedding']= df['Text'].apply(lambda x: get_embedding(x, model='text-embedding-ada-002'))

# df.to_csv('output/embedded_100_reviews.csv', index=False)