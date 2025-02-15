# API Documentation

## Base URL
`http://YOUR_SERVER_IP:5000`

---

## **1. Get Day of the Week**
### **Endpoint**
`POST /get-day`

### **Request Format**
- **Content-Type**: `application/json`
- **Body Parameters**:
  ```json
  {
    "date": "YYYY-MM-DD"
  }
