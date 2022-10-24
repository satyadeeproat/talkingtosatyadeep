import requests

URL = "https://www.google.com/search?q=Perfume+distributor+in+Netherlands"
page = requests.get(URL)

print(page.text)