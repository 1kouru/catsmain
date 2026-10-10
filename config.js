// Подключение к базе Supabase. Те же значения впишите в admin/config.js.
// Где взять: Supabase → Project Settings → API (или Data API / API Keys).
window.KITTENS_DB = {
  url: 'https://elybkyquvmgymvbarnib.supabase.co',
  // anon key — его можно публиковать: доступ ограничен правилами в базе
  key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVseWJreXF1dm1neW12YmFybmliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE2MjA3OTEsImV4cCI6MjEwNzE5Njc5MX0.dMRJ1E5uneHeOJVMIaz-1WjdCzlKFN-6tO-U-sVsaN4',
  bucket: 'kitten-photos'
};
