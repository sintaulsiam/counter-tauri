#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

#[tauri::command]
fn counter(n: i32, increase: bool) -> i32 {
    if increase {
        return n + 1;
    } else if !increase {
        if n > 0 {
            return n - 1;
        } else {
            return 0;
        }
    } else {
        return 0;
    }
}

fn main() {
    let context = tauri::generate_context!();
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![counter])
        .menu(tauri::Menu::os_default(&context.package_info().name))
        .run(context)
        .expect("error while running tauri application");
}
