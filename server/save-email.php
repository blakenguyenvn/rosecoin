<?php
define( 'DB_HOST', 'localhost' );
define( 'DB_NAME', 'subscribers' );
define( 'DB_USERNAME', 'root' );
define( 'DB_PASSWORD', 'whis@root123' );


$email = $_POST['email'];
if ( empty( $email ) ) {
	die( 'Invalid email' );
}

$conn = new mysqli( DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME );

// Check connection
if ( $conn->connect_error ) {
	die( "Connection failed: " . $conn->connect_error );
}

$created_at = date( 'Y-m-d H:i:s' );

$response = [
	'status'  => 'error',
	'message' => 'Oops! Something went wrong.'
];

// prepare and bind
$stmt = $conn->prepare( "INSERT INTO emails (email, createdAt) VALUES (?, ?)" );

if (!$stmt) {
	$conn->close();
	die( json_encode( $response ) );
}

$stmt->bind_param( "ss", $email, $created_at );

if ( ! $stmt->execute() ) {
	$conn->close();
	die( json_encode( $response ) );
}

$stmt->close();
$conn->close();

$response = [
	'status'  => 'success',
	'message' => 'Your email has been sent successfully!'
];
die( json_encode( $response ) );
?>
