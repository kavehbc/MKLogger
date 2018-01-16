<?
$userid = $_POST['userid'];
$taskid = $_POST['taskid'];

$logMouse = $_POST['tsk_' . $taskid . '_Mouse'];
$logClick = $_POST['tsk_' . $taskid . '_Click'];
$logKey = $_POST['tsk_' . $taskid . '_Key'];

$my_file = 'data/log_' . $userid . '_t' . $taskid . '_mouse.csv';
$handle = fopen($my_file, 'w') or die('Cannot open file:  '.$my_file);
fwrite($handle, logMouse);
fclose($handle);

$my_file = 'data/log_' . $userid . '_t' . $taskid . '_click.csv';
$handle = fopen($my_file, 'w') or die('Cannot open file:  '.$my_file);
fwrite($handle, logClick);
fclose($handle);

$my_file = 'data/log_' . $userid . '_t' . $taskid . '_key.csv';
$handle = fopen($my_file, 'w') or die('Cannot open file:  '.$my_file);
fwrite($handle, logKey);
fclose($handle);
?>OK