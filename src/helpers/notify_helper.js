import toastr from "toastr"
import "toastr/build/toastr.min.css"


export const push_error_notifications = (notify_message) => {
    toastr.options = {
        preventDuplicates: true,
    }

    toastr.error(notify_message)
}

export const push_success_notifications = (notify_message) => {
    toastr.options = {
        preventDuplicates: true,
    }

    toastr.success(notify_message)
}