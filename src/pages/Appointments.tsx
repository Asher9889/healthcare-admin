import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Appointments() {
    const appointments = [
        { id: 1, patient: "Alice Robinson", doctor: "Dr. John Smith", time: "09:00 AM", date: "2024-10-25" },
        { id: 2, patient: "Diana White", doctor: "Dr. Emily Davis", time: "10:30 AM", date: "2024-10-25" },
        { id: 3, patient: "Bob Martin", doctor: "Dr. Sarah Johnson", time: "11:00 AM", date: "2024-10-25" },
        { id: 4, patient: "Frank Green", doctor: "Dr. Michael Brown", time: "01:00 PM", date: "2024-10-25" },
        { id: 5, patient: "Grace Hall", doctor: "Dr. David Wilson", time: "02:15 PM", date: "2024-10-25" },
    ];

    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold tracking-tight">Appointments</h1>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {appointments.map((appt) => (
                    <Card key={appt.id}>
                        <CardHeader>
                            <CardTitle className="text-sm font-medium text-muted-foreground">{appt.date} at {appt.time}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-lg font-bold">{appt.patient}</div>
                            <p className="text-sm text-muted-foreground">with {appt.doctor}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
