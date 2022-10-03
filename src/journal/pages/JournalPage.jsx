import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectView } from "../views/NothingSelectedView"

export const JournalPage = () => {
    return (
        <JournalLayout>
            <NothingSelectView />
        </JournalLayout>
    )
}