package net.javaguides.webapp_backend.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import net.javaguides.webapp_backend.model.Entry;
import net.javaguides.webapp_backend.repository.TBRRepository;

@Service
public class TBRService {
    @Autowired
    private TBRRepository tbrRepo;

    @Transactional
    public List<Entry> getEntries() {
        return tbrRepo.getEntries();
    }

    public List<Entry> getEntriesByStatus(String status) {
        return tbrRepo.filterByStatus(status);
    }
}
