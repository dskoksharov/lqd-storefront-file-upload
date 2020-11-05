// translations
window.addEventListener("DOMContentLoaded", async () => {
  const t = await i18next.init({
    lng: navigator.language,
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          // -- upload page --
          title_upload: "Upload Storefront File",

          // step 0
          step0: "Step 0",
          step0_text: "Contact stores@vapeapp.net to onboard your store",
          step0_subtext:
            "Once your store is onboarded, proceed to the next step.",
          step0_next: "Next",

          // step 1
          step1: "Step 1",
          step1_text:
            "Select a relevant product catalog file on your device and upload it.",
          step1_file: "Choose file...",
          step1_subtext_pre: "Attention!",
          step1_subtext:
            "All products that are not in the file will be removed from your storefront.",
          step1_next: "Upload",
          upload_error: "An error has occured",

          // -- status page --
          title_status: "Upload Status",

          // step 2
          step2: "Step 2",
          step2_text: "Enter the one-time password inside the application.",
          step2_subtext: "Do not close this page to see the upload status",

          // step 3
          step3: "Step 3",
          step3_linecount: "lines uploaded",
          step3_subtext_success:
            "Your storefront has been updated according to the uploaded file. If not all lines have been unloaded, it means that these products are not in our database. We will analyze the result and add them in the near future.",
          step3_failure: "Failure...",
          step3_subtext_failure:
            "The file format does not match the format we configured to accept your catalog, please try another file or contact stores@vapeapp.net.",
          step3_timeout: "The one-time password has expired",
          step3_subtext_timeout:
            "The file upload has not been confirmed within 5 minutes after upload. Please try again.",
          step3_next: "Done",
        },
      },
      de: {
        translation: {
          title_upload: "Hochladen von Datei-Storefront",
          step0: "Schritt 0",
          step0_text: "Kontakt stores@vapeapp.net an Bord eines Shops",
          step0_subtext:
            "Sobald Ihr Geschäft onboarded wird, gehen Sie zum nächsten Schritt.",
          step0_next: "Nächster",
          step1: "Schritt 1",
          step1_text:
            "Wählen Sie eine relevante Produktkatalogdatei auf Ihrem Gerät und laden Sie es.",
          step1_file: "Datei wählen...",
          step1_subtext_pre: "Beachtung!",
          step1_subtext:
            "Alle Produkte, die nicht in der Datei werden von Ihrem Schaufenster entfernt werden.",
          step1_next: "Hochladen",
          upload_error: "Ein Fehler ist aufgetreten",
          title_status: "Upload-Status",
          step2: "Schritt 2",
          step2_text: "Geben Sie das Einmalpasswort in der Anwendung.",
          step2_subtext:
            "Verpassen Sie nicht diese Seite schließen Sie den Upload-Status zu sehen",
          step3: "Schritt 3",
          step3_linecount: "Linien hochgeladen",
          step3_subtext_success:
            "Ihr Schaufenster wurde nach der hochgeladenen Datei aktualisiert. Wenn nicht alle Zeilen entladen wurden, bedeutet dies, dass diese Produkte nicht in unserer Datenbank sind. Wir werden das Ergebnis analysieren und fügen Sie sie in der nahen Zukunft.",
          step3_failure: "Fehler...",
          step3_subtext_failure:
            "Das Dateiformat nicht das Format passen wir konfiguriert Ihren Katalog zu akzeptieren, versuchen Sie bitte eine andere Datei oder kontaktieren Sie stores@vapeapp.net.",
          step3_timeout: "Das Einmal-Passwort ist abgelaufen",
          step3_subtext_timeout:
            "Der Datei-Upload ist nicht innerhalb von 5 Minuten nach dem Upload bestätigt. Bitte versuche es erneut.",
          step3_next: "Erledigt",
        },
      },
      es: {
        translation: {
          title_upload: "Carga de archivos del escaparate",
          step0: "paso 0",
          step0_text: "Contacto stores@vapeapp.net a bordo de su tienda",
          step0_subtext:
            "Una vez que se onboarded su tienda, proceder al siguiente paso.",
          step0_next: "próximo",
          step1: "Paso 1",
          step1_text:
            "Seleccionar un archivo de catálogo de productos de referencia en el dispositivo y subirlo.",
          step1_file: "Elija el archivo...",
          step1_subtext_pre: "¡Atención!",
          step1_subtext:
            "Todos los productos que no están en el archivo serán removidos de su tienda.",
          step1_next: "Subir",
          upload_error: "Se ha producido un error",
          title_status: "Estado de la subida",
          step2: "Paso 2",
          step2_text:
            "Introduzca la contraseña de una sola vez dentro de la aplicación.",
          step2_subtext: "No cierre esta página para ver el estado de carga",
          step3: "Paso 3",
          step3_linecount: "líneas subidos",
          step3_subtext_success:
            "Su tienda se ha actualizado de acuerdo con el archivo subido. Si no todas las líneas han sido descargadas, significa que estos productos no están en nuestra base de datos. Vamos a analizar el resultado y les añadir en un futuro próximo.",
          step3_failure: "Fracaso...",
          step3_subtext_failure:
            "El formato de archivo no coincide con el formato que configura para aceptar su catálogo, por favor intente otro archivo o contacto stores@vapeapp.net.",
          step3_timeout: "La contraseña de una sola vez ha expirado",
          step3_subtext_timeout:
            "La carga de archivos no ha sido confirmada dentro de los 5 minutos después de la carga. Inténtalo de nuevo.",
          step3_next: "Hecho",
        },
      },
      ko: {
        translation: {
          title_upload: "업로드 점포 파일",
          step0: "0 단계",
          step0_text: "상점 온보드에 연락 stores@vapeapp.net",
          step0_subtext: "상점이 onboarded되면, 다음 단계로 진행합니다.",
          step0_next: "다음",
          step1: "1 단계",
          step1_text: "장치의 관련 제품 카탈로그 파일을 선택하고 업로드합니다.",
          step1_file: "파일을 선택...",
          step1_subtext_pre: "주의!",
          step1_subtext: "파일에없는 모든 제품은 매장에서 제거됩니다.",
          step1_next: "업로드",
          upload_error: "오류가 발생했습니다",
          title_status: "업로드 상태",
          step2: "2 단계",
          step2_text: "응용 프로그램 내부의 일회성 암호를 입력합니다.",
          step2_subtext: "업로드 상태를 확인하기 위해이 페이지를 닫지 마십시오",
          step3: "3 단계",
          step3_linecount: "라인은 업로드",
          step3_subtext_success:
            "귀하의 점포는 업로드 된 파일에 따라 업데이트되었습니다. 모든 라인이 언로드 된 경우,이 제품은 우리의 데이터베이스에없는 것을 의미합니다. 우리는 결과를 분석하고 가까운 장래에 추가 할 수 있습니다.",
          step3_failure: "실패...",
          step3_subtext_failure:
            "우리는 당신의 카탈로그를 허용하도록 구성 형식과 일치하지 않는 파일 형식은 다른 파일 또는 연락처 stores@vapeapp.net을 시도하십시오.",
          step3_timeout: "일회성 암호가 만료되었습니다",
          step3_subtext_timeout:
            "파일 업로드 업로드 후 약 5 분 내에 확인되지 않았습니다. 다시 시도하십시오.",
          step3_next: "끝난",
        },
      },
      pl: {
        translation: {
          title_upload: "Prześlij plik Storefront",
          step0: "Krok 0",
          step0_text: "Kontakt stores@vapeapp.net na pokładzie swojego sklepu",
          step0_subtext:
            "Gdy sklep jest onboarded, przejdź do następnego kroku.",
          step0_next: "Kolejny",
          step1: "Krok 1",
          step1_text:
            "Wybierz odpowiedni plik katalogu produktów na urządzeniu i przesłać go.",
          step1_file: "Wybierz plik...",
          step1_subtext_pre: "Uwaga!",
          step1_subtext:
            "Wszystkie produkty, które nie są w pliku zostaną usunięte z Twojego sklepu.",
          step1_next: "Przekazać plik",
          upload_error: "Wystąpił błąd",
          title_status: "Stan przesyłania",
          step2: "Krok 2",
          step2_text: "Wprowadź hasło jednorazowe wewnątrz aplikacji.",
          step2_subtext:
            "Nie zamykaj tej strony, aby sprawdzić stan przesyłania",
          step3: "Krok 3",
          step3_linecount: "linie przesłanych",
          step3_subtext_success:
            "Twój sklepowa został zaktualizowany według plik. Jeżeli nie wszystkie linie zostały rozładowane, oznacza to, że produkty te nie są w naszej bazie danych. Będziemy analizować wynik i dodać je w najbliższej przyszłości.",
          step3_failure: "Niepowodzenie...",
          step3_subtext_failure:
            "Format pliku nie pasuje do formatu mamy skonfigurowany, aby zaakceptować swój katalog, spróbuj innego pliku lub kontaktów stores@vapeapp.net.",
          step3_timeout: "Hasło jednorazowe wygasła",
          step3_subtext_timeout:
            "Plik do przesłania nie została potwierdzona w ciągu 5 minut po przesłaniu. Proszę spróbuj ponownie.",
          step3_next: "Gotowy",
        },
      },
      ru: {
        translation: {
          title_upload: "Загрузка файла витрины",
          step0: "Шаг 0",
          step0_text:
            "Свяжитесь с нами через stores@vapeapp.net, чтобы сконфигурировать Ваш магазин",
          step0_subtext:
            "После того, как ваш магазин будет сконфигурирован, переходите к следующему шагу.",
          step0_next: "Далее",
          step1: "Шаг 1",
          step1_text:
            "Выберите соответствующий файл с каталогом продуктов на устройстве и загрузите его.",
          step1_file: "Выбрать файл...",
          step1_subtext_pre: "Внимание!",
          step1_subtext:
            "Все продукты, которые не включены в файл будет удалены из вашего магазина.",
          step1_next: "Загрузить",
          upload_error: "Произошла ошибка",
          title_status: "Статус загрузки",
          step2: "Шаг 2",
          step2_text: "Введите одноразовый пароль внутри приложения.",
          step2_subtext:
            "Не закрывайте эту страницу, чтобы увидеть статус загрузки",
          step3: "Шаг 3",
          step3_linecount: "строк загружено",
          step3_subtext_success:
            "Ваша электронная витрина была обновлена ​​в соответствии с загруженным файлом. Если не все строки были загружены, это означает, что эти продукты отсутствуют в нашей базе данных. Мы проанализируем результат и добавим их в ближайшем будущем.",
          step3_failure: "Ошибка...",
          step3_subtext_failure:
            "Формат файла не соответствует формату, сконфигурированному для Вашей витрины. Пожалуйста, попробуйте другой файл или обратитесь к stores@vapeapp.net.",
          step3_timeout: "Время действия одноразового пароля истекло",
          step3_subtext_timeout:
            "Загрузка файла не была подтверждена в течение 5 минут после загрузки. Пожалуйста, попробуйте еще раз.",
          step3_next: "Готово",
        },
      },
    },
  });

  // add translations to elements
  document.querySelectorAll("[data-translate]").forEach(function (elem) {
    const translateKey = elem.getAttribute("data-translate");
    elem.textContent = t(translateKey);
  });

  const event = new CustomEvent("document_translated", { cancelable: false });
  document.dispatchEvent(event);
});
