<?php
$name = isset($_POST['name']) ? $_POST['name'] : '';
$email = isset($_POST['email']) ? $_POST['email'] : '';
$age = isset($_POST['age']) ? $_POST['age'] : '';
$spec = isset($_POST['spec']) ? $_POST['spec'] : '';
$exp = isset($_POST['exp']) ? $_POST['exp'] : '';

$data = "Имя: $name\nEmail: $email\nВозраст: $age\nСпециальность: $spec\nСтаж: $exp лет\n\n";

$file = fopen("data.txt", "a");

if ($file) {
    fwrite($file, $data);
    fclose($file);
    echo "Данные сохранены";
} else {
    echo "Ошибка при сохранении данных";
}
?>