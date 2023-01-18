import json
import boto3
import os
from boto3.dynamodb.conditions import Key

def lambda_handler(event, context):
    # DynamoDB conference table list return
    dynamodb = boto3.resource('dynamodb')
    
    #Get the table
    table = dynamodb.Table(os.environ['TABLE_NAME'])

    id = event.get('id', None)
    password = event.get('password', None)

    q = Key('id').eq(id) & Key('password').eq(password)
        
    response = table.query(
        KeyConditionExpression = q
    )
    
    #print(response)
    
    if response['Count'] == 0:
        return False
    else:
        return True
