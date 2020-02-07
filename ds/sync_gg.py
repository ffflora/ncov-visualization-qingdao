import gspread
from oauth2client.service_account import ServiceAccountCredentials
import pandas as pd
import requests 
from bs4 import BeautifulSoup 
import json



# pull data from google sheets
def sheetsync(datasheet,tab):
    
    scope = ['https://spreadsheets.google.com/feeds',
             'https://www.googleapis.com/auth/drive']
    credentials = ServiceAccountCredentials.from_json_keyfile_name(
             'qd-cnov-database-2027ad01e8de.json', scope) 
    gc = gspread.authorize(credentials)
    
    spreadsheetName = datasheet
    sheetName = tab  # <--- please set the sheet name here.
    spreadsheet = gc.open(spreadsheetName)
    sheet = spreadsheet.worksheet(sheetName)
    
    data = sheet.get_all_values()
    headers = data.pop(0)

    df = pd.DataFrame(data, columns=headers)
    return df


