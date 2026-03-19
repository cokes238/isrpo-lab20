# Лабораторная работа №20: Работа с DOM и событиями в JavaScript

## Основная информация

**ФИО:** Горишний Д.О, Яшин А.А.
**Группа:** ИСП-232  
**Дата:** 19.03.2026  

## Краткое описание работы

В ходе выполнения лабораторной работы были изучены основы работы с DOM-деревом в JavaScript:

- поиск HTML-элементов с использованием `getElementById`, `querySelector`;
- изменение содержимого и стилей элементов;
- обработка событий (клик, ввод текста, отправка формы);
- валидация данных формы;
- динамическое создание и удаление элементов;
- использование делегирования событий для работы с динамически добавленными элементами.

## Структура проекта
Lab20_DOM_Events_FIO/
│
├── README.md
├── index.html
├── style.css
├── main.js
├── dynamicElements.html
├── dynamicElements.js
│
└── img/
    ├── gitPushLab20_DOM_Events_FIO.png
    ├── step2_domStructureLab20_FIO.png
    ├── step3_domSelectionLab20_FIO.png
    ├── step4_domManipulationLab20_FIO.png
    ├── step5_clickEventLab20_FIO.png
    ├── step6_inputEventListener_FIO.png
    ├── step7_miniTaskLab20_FIO.png
    ├── step8_formInputLab20_FIO.png
    ├── step9_formValidationLab20_FIO.png
    └── step10_dynamicElementsLab20_FIO.png


## Сравнение с C# (WinForms/WPF)

DOM в JavaScript можно сравнить с моделью управления элементами в WinForms. Обе технологии позволяют находить элементы, изменять их свойства и обрабатывать события, но делают это по-разному.

### Концепция "Найти элемент"

| C# (WinForms) | JavaScript (DOM) |
|---------------|------------------|
| `Button myButton = this.Controls["myButton"];` | `const myButton = document.getElementById("myButton");` |

### Изменение текста

| C# (WinForms) | JavaScript (DOM) |
|---------------|------------------|
| `label1.Text = "Новый текст";` | `label1.textContent = "Новый текст";` |

### Добавление обработчика

| C# (WinForms) | JavaScript (DOM) |
|---------------|------------------|
| `button1.Click += HandleClick;` | `button.addEventListener("click", handleClick);` |

### Создание элемента

| C# (WinForms) | JavaScript (DOM) |
|---------------|------------------|
| `Button btn = new Button();` | `const btn = document.createElement("button");` |

### Добавление в контейнер

| C# (WinForms) | JavaScript (DOM) |
|---------------|------------------|
| `panel1.Controls.Add(btn);` | `panel.appendChild(btn);` |

### Скрытие элемента

| C# (WinForms) | JavaScript (DOM) |
|---------------|------------------|
| `button1.Visible = false;` | `button.style.display = "none";` |

## События: C# vs JavaScript

**C# (WinForms):**

```csharp
button1.Click += (sender, e) => {
    label1.Text = "Нажато!";
};

JavaScript (DOM):

javascript
button.addEventListener("click", (e) => {
    label1.textContent = "Нажато!";
});
Валидация формы
C# (WinForms):

csharp
if (string.IsNullOrWhiteSpace(textBox1.Text))
{
    MessageBox.Show("Введите имя");
    textBox1.Focus();
    return;
}
JavaScript (DOM):

javascript
if (usernameInput.value.trim() === "") {
    alert("Введите имя");
    usernameInput.focus();
    return;
}
Главные отличия
Аспект	C# WinForms	JavaScript DOM
Компиляция	Да	Нет (интерпретация)
Типизация	Строгая	Динамическая
Ошибки	Во время компиляции	Во время выполнения
UI-дизайнер	Есть (визуальный)	Нет (только код)
Платформа	Windows	Любой браузер
Преимущества DOM перед WinForms
Кроссплатформенность (работает в любом браузере);

Не требует установки;

Лёгкость обновления (достаточно изменить файлы на сервере);

Современные возможности UI (CSS-анимации, адаптивность).

Преимущества WinForms перед DOM
Визуальный дизайнер (drag & drop);

Ошибки выявляются на этапе компиляции;

Глубокая интеграция с Windows API;

Более строгая структура приложения.

Вывод
Несмотря на различия в подходах, DOM в JavaScript и WinForms в C# решают схожие задачи: управление элементами интерфейса, обработка событий и взаимодействие с пользователем. DOM предлагает большую гибкость и кроссплатформенность, тогда как WinForms удобен для быстрой разработки десктопных приложений под Windows.
