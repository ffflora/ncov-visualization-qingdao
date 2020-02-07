

Get the datasheet from [Google sheets](https://docs.google.com/spreadsheets/d/1c3qGEq8_LTKm6VmCBKgDHsZMnhZ_5feaFUJkYGPP2Bw/edit#gid=0)

```python

import sync-gg as gg
data = gg.sheetsync(datasheet,tab)

```


Find the following functions inside the `preparation.ipynb`: 

- Crawl all the bulletin from the 卫建委 website, and will save the data local in `bulletin.json'  
- Get the diagnosed data for each district (确诊病例人数）





---
## Data
`diag.json` contains the amount of diagnosed cases for each district.    
`cured.json` contains the amount of cured cases for each district.   
`clinic-coord.json` contains the hospitals name, address, lng and lat.   
`bulletin.json` contains all of the bulletins from the website.  
`dataset.csv` contains the `qd` tab in the dataset from google sheets.  
