package net.javaguides.webapp_backend.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.webapp_backend.exception.ResourceNotFoundException;
import net.javaguides.webapp_backend.model.Entry;
import net.javaguides.webapp_backend.repository.TBRRepository;
import net.javaguides.webapp_backend.service.TBRService;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class TBREntryController {
    @Autowired
    private TBRRepository tbrRepo;

    @Autowired
    private TBRService tbrService;

    // get all entries
    @GetMapping("/entries")
    public List<Entry> getEntries() {
        return tbrService.getEntries();
    }

    // create entry
    @PostMapping("/entries")
    public Entry createEntry(@RequestBody Entry entry) {
        return tbrRepo.save(entry);
    }

    // get entry by id
    @GetMapping("/entries/{id}")
    public ResponseEntity<Entry> getEntryById(@PathVariable Long id) {
        Entry entry = tbrRepo.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Not Found: Entry with id: " + id));
        return ResponseEntity.ok(entry);
    }

    // update entry
    @PutMapping("/entries/{id}")
    public ResponseEntity<Entry> updateEntry(@PathVariable Long id, @RequestBody Entry update) {
        Entry entry = tbrRepo.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Not Found: Entry with id: " + id));
        
        entry.setBook(update.getBook());
        entry.setAuthor(update.getAuthor());
        entry.setAddedBy(update.getAddedBy());
        entry.setStatus(update.getStatus());

        Entry updatedEntry = tbrRepo.save(entry);
        return ResponseEntity.ok(updatedEntry);
    }

    // delete entry
    @DeleteMapping("/entries/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEntry(@PathVariable Long id) {
        Entry entry = tbrRepo.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Not Found: Entry with id: " + id));
        
        tbrRepo.delete(entry);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/entries/filter")
    public ResponseEntity<List<Entry>> filterEntries(@RequestParam String status) {
        return ResponseEntity.ok(tbrService.getEntriesByStatus(status));
    }

    @GetMapping("/entries/statuses")
    public ResponseEntity<List<String>> getStatus() {
        return ResponseEntity.ok(tbrRepo.getDistinctStatus());
    }
    
   }
