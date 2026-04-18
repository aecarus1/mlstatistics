import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

function MatchBlock({ match }) {
    const { outcome, opponent, date, format, round, players } = match;
    const isVictory = outcome === "VICTORY";

    return (
        <Card className="mb-6 font-mono rounded-sm border border-border">
            <CardHeader className="py-3 px-4">
                <div className="flex items-center gap-3 flex-wrap">
                    <Badge
                        className={`rounded-sm text-xs font-mono font-semibold px-2 py-0.5 ${isVictory
                            ? "bg-green-100 text-green-800 border border-green-300 hover:bg-green-100"
                            : "bg-red-100 text-red-800 border border-red-300 hover:bg-red-100"
                            }`}
                    >
                        {outcome}
                    </Badge>
                    <span className="text-sm font-semibold tracking-tight">
                        vs {opponent}
                    </span>
                    <Separator orientation="vertical" className="h-4" />
                    <span className="text-xs text-muted-foreground">{date}</span>
                    <Separator orientation="vertical" className="h-4" />
                    <span className="text-xs text-muted-foreground">{format}</span>
                    <Separator orientation="vertical" className="h-4" />
                    <span className="text-xs text-muted-foreground">{round}</span>
                </div>
            </CardHeader>

            <CardContent className="p-0">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-muted/50">
                            {["Role", "Hero", "KDA", "Score", "MVP"].map((h) => (
                                <TableHead
                                    key={h}
                                    className="font-mono text-xs font-semibold text-muted-foreground h-8 px-4"
                                >
                                    {h}
                                </TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {players.map((p, i) => (
                            <TableRow key={i} className="hover:bg-muted/30">
                                <TableCell className="py-2 px-4 text-xs text-muted-foreground">
                                    {p.role}
                                </TableCell>
                                <TableCell className="py-2 px-4 text-xs font-medium">
                                    {p.hero}
                                </TableCell>
                                <TableCell className="py-2 px-4 text-xs tabular-nums text-muted-foreground">
                                    {p.kda}
                                </TableCell>
                                <TableCell
                                    className={`py-2 px-4 text-xs font-semibold tabular-nums ${p.mvp ? "bg-yellow-50 text-yellow-800" : ""
                                        }`}
                                >
                                    {p.score}
                                </TableCell>
                                <TableCell className="py-2 px-4">
                                    {p.mvp && (
                                        <Badge className="rounded-sm text-[10px] font-mono px-1.5 py-0 bg-yellow-100 text-yellow-800 border border-yellow-300 hover:bg-yellow-100">
                                            MVP
                                        </Badge>
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}

function WinRate({ matches }) {
    const total = matches.length;
    const wins = matches.filter((m) => m.outcome === "VICTORY").length;
    const pct = total === 0 ? 0 : Math.round((wins / total) * 100);

    return (
        <div className="flex items-center gap-3 font-mono">
            <span className="text-xs text-muted-foreground tabular-nums">
                {wins}W — {total - wins}L
            </span>
            <Separator orientation="vertical" className="h-4" />
            <span
                className={`text-sm font-semibold tabular-nums ${pct >= 50 ? "text-green-700" : "text-red-700"
                    }`}
            >
                {pct}%
            </span>
            <span className="text-xs text-muted-foreground">WR</span>
        </div>
    );
}

export default function DataTemplate({ matches }) {
    return (
        <div className="min-h-screen bg-background font-mono">
            {/* Logo header */}
            <div className="px-6 py-5 border-b border-border flex items-center justify-between">
                <div>
                    <span className="text-sm font-mono font-bold tracking-widest uppercase text-foreground">
                        MLBB
                    </span>
                    <span className="text-sm font-mono font-normal tracking-widest uppercase text-muted-foreground">
                        {" "}Scrim Statistics
                    </span>
                </div>
                <WinRate matches={matches} />
            </div>

            {/* Match blocks */}
            <div className="max-w-2xl mx-auto px-6 py-6">
                {matches.map((match, i) => (
                    <MatchBlock key={i} match={match} />
                ))}
            </div>
        </div>
    );
}