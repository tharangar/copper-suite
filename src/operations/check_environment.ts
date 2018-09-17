import * as os from "os";

export function check_os_test(input: number): any {
    return os.platform();
}