from app import app 
import json 

def test_user_status_200():
    response_200 = app.test_client().get('/user_status/anteezy')
    assert response_200.status_code == 200
    
def test_user_status_404():
    response_404 = app.test_client().get('/user_status/anteezymadeupuser')
    assert response_404.status_code == 404

def test_receipt_200():
    response_200 = app.test_client().get('/receipt/anteezy')
    assert response_200.status_code == 200

def test_receipt_404():
    response_404 = app.test_client().get('/receipt/anteezy_shouldfail')
    assert response_404.status_code == 404
    
def test_user_list():
    response = app.test_client().get('/user_list')
    assert response.status_code == 200
    
def test_user_get():
    response_200 = app.test_client().get('/user/anteezy')
    assert response_200.status_code == 200

def test_user_post():
    response = app.test_client().post('/user/anteezy')
    assert response.status_code == 409