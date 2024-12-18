# Hall Booking API

## Overview

The Hall Booking API provides endpoints to manage a hall booking system. This includes creating rooms, booking rooms, listing rooms and customers, and retrieving booking statistics.

## Features

- **Create a Room**: Add new rooms with details such as seat count, amenities, and hourly price.
- **Book a Room**: Reserve a room for a customer specifying date, time, and room ID.
- **List All Rooms**: Retrieve all rooms along with their booking status.
- **List All Customers**: View all customers and their booking details.
- **Customer Booking Statistics**: Get a summary of how many times a specific customer has booked rooms.

## Endpoints

### 1. Create a Room

**Endpoint**: `POST /rooms`

**Request Body**:

```json
{
  "numberOfSeats": 30,
  "amenities": ["WiFi", "Whiteboard"],
  "pricePerHour": 100
}
```

**Response**:

```json
{
  "id": "room-101",
  "numberOfSeats": 30,
  "amenities": ["WiFi", "Whiteboard"],
  "pricePerHour": 100,
  "bookings": []
}
```

### 2. Book a Room

**Endpoint**: `POST /bookings`

**Request Body**:

```json
{
  "customerName": "John Doe",
  "date": "2024-08-18",
  "startTime": "10:00",
  "endTime": "12:00",
  "roomId": "room-101"
}
```

**Response**:

```json
{
  "id": "booking-1692260600000",
  "customerName": "John Doe",
  "date": "2024-08-18",
  "startTime": "10:00",
  "endTime": "12:00",
  "roomId": "room-101",
  "bookingDate": "2024-08-18T15:30:00.000Z",
  "bookingStatus": "Confirmed"
}
```

### 3. List All Rooms

**Endpoint**: `GET /rooms`

**Response**:

```json
[
  {
    "roomName": "room-101",
    "bookedStatus": "Available",
    "bookings": []
  },
  {
    "roomName": "room-102",
    "bookedStatus": "Booked",
    "bookings": [
      {
        "id": "booking-1692260600000",
        "customerName": "John Doe",
        "date": "2024-08-18",
        "startTime": "10:00",
        "endTime": "12:00"
      }
    ]
  }
]
```

### 4. List All Customers

**Endpoint**: `GET /customers`

**Response**:

```json
[
  {
    "customerName": "John Doe",
    "roomName": "room-101",
    "date": "2024-08-18",
    "startTime": "10:00",
    "endTime": "12:00"
  }
]
```

### 5. List Customer Booking Statistics

**Endpoint**: `GET /customers/:name/bookings`

**Parameters**:

- `:name` - The name of the customer.

**Response**:

```json
{
  "customerName": "John Doe",
  "bookingCount": 1,
  "bookingDetails": [
    {
      "roomName": "room-101",
      "date": "2024-08-18",
      "startTime": "10:00",
      "endTime": "12:00",
      "bookingId": "booking-1692260600000",
      "bookingDate": "2024-08-18T15:30:00.000Z",
      "bookingStatus": "Confirmed"
    }
  ]
}
```

## Setup

### Clone the Repository:

```bash
git clone <repository-url>
cd <repository-directory>
```

### Install Dependencies:

```bash
npm install
```

### Start the Server:

```bash
npm start
```

The server will run on [http://localhost:3000](http://localhost:3000) by default.

## License

This project is licensed under the MIT License.
