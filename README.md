# MeloVerse-Magic
Welcome to CelebTunes Extravaganza, an electrifying music show experience that brings together the biggest celebrities and most talented singers in the industry for an unforgettable night of entertainment and melodies.

"MeloVerse-Magic-API is the backend API service for the MeloVerse Magic platform, a comprehensive event booking platform for music shows featuring celebrities and singers. The API serves as the core of the application, enabling seamless communication between the frontend and backend, managing data retrieval, storage, and processing.

The MeloVerse-Magic-API provides a RESTful interface, allowing clients to access and interact with various resources related to events, bookings, users, and celebrities. Through this API, users can browse and book tickets for their favorite music shows, view detailed event information, check celebrity profiles, and manage their bookings.

#   Event:

+ Event ID
+ Event Name
+ Event Description
+ Event Date
+ Event Time
+ Event Location
+ Event Category (e.g., Concert, Conference, Workshop, Sports, etc.)
+ Event Image/Poster
+ Event Capacity (maximum number of attendees)
+ Event Organizer/Host


#   User:

+ User ID
+ First Name
+ Last Name
+ Email
+ Password (hashed)
+ Profile Picture
+ Contact Number
+ Role


#   Ticket:

+ Ticket ID
+ Event ID (foreign key to link with the specific event)
+ User ID (foreign key to link with the ticket buyer)
+ Ticket Type (e.g., General Admission, VIP, Student, etc.)
+ Ticket Price
+ Ticket Quantity
+ Ticket QR Code (for validation at the event)


#   Venue:

+ Venue ID
+ Venue Name
+ Venue Address
+ Venue Capacity (maximum number of attendees it can accommodate)


#   Organizer:

+ Organizer ID
+ Organizer Name
+ Organizer Description
+ Organizer Logo

#   Payment:

+ Payment ID
+ User ID (foreign key to link with the payer)
+ Event ID (foreign key to link with the event being booked)
+ Total Amount
+ Payment Status (e.g., Paid, Pending, Refunded, etc.)
+ Payment Date/Time

# User-related Features:

+ Register User: Allows users to create an account on the platform.
+ Login: Authenticates users and grants access to their account.
+ Update Profile: Enables users to update their profile information and preferences.
+ View Bookings: Shows a list of events that the user has booked tickets for.
+ Cancel Booking: Allows users to cancel their bookings for events.


# Event-related Features:

+ Create Event: Enables event organizers to create new events with details such as date, time, location, ticket price, etc.
+ Edit Event: Allows event organizers to make changes to event details after creation.
+ Delete Event: Allows event organizers to remove events from the platform.
+ View Event Details: Displays detailed information about a specific event, including ticket availability and booking status.
+ Search Events: Allows users to search for events based on criteria such as location, date, category, etc.


# Booking-related Features:

+ Book Event: Allows users to book tickets for events they are interested in attending.
+ View Booking Details: Displays the details of a particular booking, including event information and ticket details.
+ Manage Bookings: Provides event organizers with the ability to manage bookings for their events, view attendee lists, and check-in attendees on the day of the event.
+ Generate E-Tickets: Generates electronic tickets for users after successful booking.


# Administrator/Platform Administrator Features:

+ Approve Event: Allows administrators to review and approve events submitted by event organizers.
+ Manage Users: Provides administrators with the ability to manage user accounts, including user roles and permissions.
+ Analytics and Reports: Generates reports and analytics on ticket sales, event popularity, revenue, etc., to gain insights into platform performance.