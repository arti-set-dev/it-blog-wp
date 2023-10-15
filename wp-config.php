<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе установки.
 * Необязательно использовать веб-интерфейс, можно скопировать файл в "wp-config.php"
 * и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки базы данных
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://ru.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Параметры базы данных: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'it_blog' );

/** Имя пользователя базы данных */
define( 'DB_USER', 'root' );

/** Пароль к базе данных */
define( 'DB_PASSWORD', '' );

/** Имя сервера базы данных */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу. Можно сгенерировать их с помощью
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}.
 *
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными.
 * Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '=zWON%]=U H *PPinhDAoh-dOswOfR.]uGSxCLQ:M88xT;2vooAmmC)M0Dtp,>MH' );
define( 'SECURE_AUTH_KEY',  '<O~e/sboCN2oocMM19EP]=I~m$qx*qs$Qd7}/Eq.<P$1#8vZZzYD=#4z3;l|P;?.' );
define( 'LOGGED_IN_KEY',    'bo9Hfl%iYWbw^mO&h[vg-W;H^*/$/q}S^*C-;1YDE`{HVIkb?|urm3X2{~si@3,2' );
define( 'NONCE_KEY',        '%<2g%wf5RyB~I]M%>2*Uk5YYtz^{UUgD)dfK Uw_o^QJ52BP1> #2kuYh}Qp$L1j' );
define( 'AUTH_SALT',        'B4j}v7&+| Q{dTHS$l)Lj xok=;t4UgPJM_#56uLsCCj9m8nsY.WQuud|]3-(nk#' );
define( 'SECURE_AUTH_SALT', '@nj r0dO8WL,oVLMAuU&c_X(}Oqiif.<Zap=_U.BG4ryM/0Np,|0rh:Rx7YT|RqU' );
define( 'LOGGED_IN_SALT',   '=L_fid5IFrFFn&|z+cb_YxVIU&=JZT9b:_T0u{.T>EI5Qg^@yk!8?2}L@9PtYvRU' );
define( 'NONCE_SALT',       'o9M=Uqo5JKF,@em{Y!iM|[U>{!3;^7$dRhioY`+X&vbptc.ic{H&@&bGbtqB-TkR' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в документации.
 *
 * @link https://ru.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Произвольные значения добавляйте между этой строкой и надписью "дальше не редактируем". */



/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once ABSPATH . 'wp-settings.php';
