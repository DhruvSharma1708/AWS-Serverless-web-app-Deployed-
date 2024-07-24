import json
import boto3
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('Students')

def lambda_handler(event, context):
    student_id = event['student_id']
    new_data = event['new_data']
    response = table.update_item(
        Key={
            'student_id': student_id
        },
        UpdateExpression="set info=:d",
        ExpressionAttributeValues={
            ':d': new_data
        },
        ReturnValues="UPDATED_NEW"
    )
    return {
        'statusCode': 200,
        'body': json.dumps('Student data updated successfully')
    }
